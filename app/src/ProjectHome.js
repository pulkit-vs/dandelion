import React from 'react';
import { SourceReader, PapperBlock } from 'dan-components';
import Grid from '@material-ui/core/Grid';
import { PaperSheet } from '../containers/UiElements/demos';
import EnhancedTable from '../containers/Tables/TablePlayground';
import MediaCard from './Cards';

export default class ProjectHome extends React.Component {
    render() {
        const docSrc = '../containers/UiElements/demos/Cards/';
        return (
            <div>
                <Grid container>
                    <Grid xs={12} sm={4}>
                        <MediaCard ></MediaCard>
                    </Grid>
                    <Grid xs={12} sm={12}><br></br></Grid>
                    <Grid container item sm={12}>
                        <EnhancedTable></EnhancedTable>
                    </Grid>
                </Grid>
            </div>
        )
    }
}