import React from 'react';

import { Grid } from '@mui/material';
import BasicCard from './BasicCard';

export default function BlogEntries() {
    return(
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <BasicCard />
          </Grid>
          <Grid item xs={4}>
            <BasicCard />
          </Grid>
          <Grid item xs={4}>
            <BasicCard />
          </Grid>
        </Grid>
    );
}
