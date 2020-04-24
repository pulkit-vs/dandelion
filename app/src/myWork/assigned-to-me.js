import React from 'react';
import { SourceReader, PapperBlock } from 'dan-components';
import Grid from '@material-ui/core/Grid';
import { PaperSheet } from '../../containers/UiElements/demos';
import EnhancedTable from '../../containers/Tables/TablePlayground';

const headCells = [
    { id: 'tickedId', numeric: false, disablePadding: true, label: 'Ticket Id' },
    { id: 'type', numeric: true, disablePadding: false, label: 'Type' },
    { id: 'reporter', numeric: true, disablePadding: false, label: 'Reporter' },
    { id: 'title', numeric: true, disablePadding: false, label: 'Title' },
    { id: 'priority', numeric: true, disablePadding: false, label: 'Priority' },
    { id: 'assignedDate', numeric: true, disablePadding: false, label: 'Assigned Date' },
  ];

  function createData(tickedId, type, reporter, title, priority, assignedDate) {
    return { tickedId, type, reporter, title, priority, assignedDate };
  }

  const rows = [
    createData('AMN Scheduling', 'AWON', 'Software Project', 'Nikhil Agarwal', '2 April, 2019'),
    createData('AMN Scheduling', 'AWON', 'Software Project', 'Nikhil Agarwal', '2 April, 2019'),
    createData('AMN Scheduling', 'AWON', 'Software Project', 'Nikhil Agarwal', '2 April, 2019'),
    createData('AMN Scheduling', 'AWON', 'Software Project', 'Nikhil Agarwal', '2 April, 2019'),
    createData('AMN Wonolo', 'AWON', 'Software Project', 'Nikhil Agarwal', '2 April, 2019'),
    createData('AMN Wonolo', 'AWON', 'Software Project', 'Nikhil Agarwal', '2 April, 2019'),
    createData('AMN Wonolo', 'AWON', 'Software Project', 'Nikhil Agarwal', '2 April, 2019'),
    createData('AMN Wonolo', 'AWON', 'Software Project', 'Nikhil Agarwal', '2 April, 2019'),
   
  ];

export default class AssignedToMe extends React.Component {
  render() {
    const docSrc = '../containers/UiElements/demos/Cards/';
    return (
      <div>
        <Grid container>
          <Grid xs={12} sm={12}>
            <br />
          </Grid>
          <Grid container item sm={12}>
            <EnhancedTable heading={"My Tasks"} headCells={headCells} rows={rows}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}
