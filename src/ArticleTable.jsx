import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const columns = [
  { id: 'published_date', label: 'Published Date', minWidth: 170 },
  { id: 'headline', label: 'Headline', minWidth: 100 },
  {
    id: 'summary',
    label: 'Summary',
    minWidth: 170,
    maxWidth: 500,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'url',
    label: 'URL',
    minWidth: 170,
    maxWidth: 500,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'source',
    label: 'Source',
    minWidth: 170,
    maxWidth: 500,
    align: 'left',
    format: (value) => value.toFixed(2),
  },
];

function createData(published_date, headline, summary, url, source) {
  console.log("calling create data: ",{ published_date, headline, summary, url, source });
  return { published_date, headline, summary, url, source };
}

var rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

const useStyles = makeStyles({
  root: {
    width: '90%',
  },
  container: {
    maxHeight: '100%',
  },
});

export default  function StickyHeadTable(args) {
  
  console.log("show me searchkeyword: ",args.searchkeyword);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  const handleChangePage = async (event, newPage) => {
    console.log("new page is: ",newPage);
    //update rows variable
    let response = await axios({
      method: 'get',
      url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?fq='+args.searchkeyword+'&facet=true&begin_year=2011&api-key=xrp7NPZMKRQ3U8nmHM5UMXu2XwBKYXei&sort=newest&page='+newPage+'&fl=web_url&fl=pub_date&fl=headline&fl=abstract&fl=source'
    });
    console.log("new rows is supposed to be: ",response.data.response.docs);
    var data = response.data.response.docs;
    rows=[];
    for(var i=0;i<data.length;i++){
      var d = createData(data[i].pub_date,data[i].headline.main,data[i].abstract,data[i].web_url,data[i].source);
      console.log("pushing: ",d);
      rows.push(d);
    }
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  rows= args.defaultRows;
  return (
    <Paper className={classes.root} style={{width:'96%',marginTop:"2%",marginLeft:'3.5%',height:'100%'}}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead>
            <StyledTableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth}}
                >
                  {column.label}
                </TableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows.slice(0,rowsPerPage).map((row) => {
              return (
                <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
