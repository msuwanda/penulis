<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
header('Access-Control-Allow-Origin: '.$_SERVER['REMOTE_ADDR']);
$aColumns = array(__FL_ROWS__);

// Indexed column (used for fast and accurate table cardinality)
$sIndexColumn = '__ROW_ID__';

// DB table to use
$sTable = '__TB_NAME__';

// Database connection information
include $_SERVER['DOCUMENT_ROOT']."/conf/setDBSS.php";

// Input method (use $_GET, $_POST or $_REQUEST)
$input =& $_GET;

/** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * If you just want to use the basic configuration for DataTables with PHP server-side, there is
 * no need to edit below this line
 */

/**
 * Character set to use for the MySQL connection.
 * MySQL will return all strings in this charset to PHP (if the data is stored correctly in the database).
 */
$gaSql['charset']  = 'utf8';

/**
 * MySQL connection
 */
$db = new mysqli($gaSql['server'], $gaSql['user'], $gaSql['password'], $gaSql['db'], $gaSql['port']);

/**
 * Paging
 */
$sLimit = "";
if ( isset( $input['iDisplayStart'] ) && $input['iDisplayLength'] != '-1' ) {
    $sLimit = " LIMIT ".intval( $input['iDisplayStart'] ).", ".intval( $input['iDisplayLength'] );
}


$sOrder = " ORDER BY __ROW_ID__ DESC";


/**
 * Filtering
 * NOTE this does not match the built-in DataTables filtering which does it
 * word by word on any field. It's possible to do here, but concerned about efficiency
 * on very large tables, and MySQL's regex functionality is very limited
 */
$iColumnCount = count($aColumns);
// Individual column filtering

// Individual column filtering
for ( $i=0 ; $i<$iColumnCount ; $i++ ) {
    if ( isset($input['bSearchable_'.$i]) && $input['bSearchable_'.$i] == 'true' && $input['sSearch_'.$i] != '' ) {
        $aFilteringRules[] = "`".$aColumns[$i]."` LIKE '%".$db->real_escape_string($input['sSearch_'.$i])."%'";
    }
}
// filtering manual
/*
if ( isset($input['bSearchable_0']) && $input['bSearchable_0'] == 'true' && $input['sSearch_0'] != '' ) {
        $aFilteringRules[] = "`".$aColumns[0]."` LIKE '%".$db->real_escape_string($input['sSearch_0'])."%'";
    }
*/

if (!empty($aFilteringRules)) {
    $sWhere = " WHERE ".implode(" AND ", $aFilteringRules);
} else {
    $sWhere = "";
}


/**
 * SQL queries
 * Get data to display
 */
$aQueryColumns = array();
foreach ($aColumns as $col) {
    if ($col != ' ') {
        $aQueryColumns[] = $col;
    }
}

$sQuery = "
    SELECT SQL_CALC_FOUND_ROWS `".implode("`, `", $aQueryColumns)."`
    FROM `".$sTable."`".$sWhere.$sOrder.$sLimit;

$rResult = $db->query( $sQuery ) or die($db->error);

// Data set length after filtering
$sQuery = "SELECT FOUND_ROWS()";
$rResultFilterTotal = $db->query( $sQuery ) or die($db->error);
list($iFilteredTotal) = $rResultFilterTotal->fetch_row();

// Total data set length
$sQuery = "SELECT COUNT(`".$sIndexColumn."`) FROM `".$sTable."`";
$rResultTotal = $db->query( $sQuery ) or die($db->error);
list($iTotal) = $rResultTotal->fetch_row();


/**
 * Output
 */
$output = array(
    "sEcho"                => intval($input['sEcho']),
    "iTotalRecords"        => $iTotal,
    "iTotalDisplayRecords" => $iFilteredTotal,
    "aaData"               => array(),
);

while ( $aRow = $rResult->fetch_assoc() ) {
    $row = array();
    for ( $i=0 ; $i<$iColumnCount ; $i++ ) {
        if ( $aColumns[$i] == 'version' ) {
            // Special output formatting for 'version' column
            $row[] = ($aRow[ $aColumns[$i] ]=='0') ? '-' : $aRow[ $aColumns[$i] ];
        } elseif ( $aColumns[$i] != ' ' ) {
            // General output
            $row[] = $aRow[ $aColumns[$i] ];
        }
    }
    $output['aaData'][] = $row;
}

echo json_encode( $output );
