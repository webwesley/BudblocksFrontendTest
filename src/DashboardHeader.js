import React, { Component } from 'react';
import { IconButton, Icon, Grid, Button } from '@material-ui/core';
import { Add, Delete, AccountBalance } from '@material-ui/icons';
import { formatMoney } from './Utils';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import store from './UserStore';

const styles = {
  Right: {
    textAlign: 'right',
  },
  Left: {
    textAlign: 'left',
  },
  Balance: {
    paddingLeft: 30,
    color: '#85bb65',
  },
  Rating: {
    textAlign: 'center',
    paddingRight: 20,
  }
}

@observer
class DashboardHeader extends Component {
  constructor(props){
    super(props);

    this.state = {
      rating: 9.9,
    }
  }

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={6} style={styles.Left}>
            <IconButton component={Link} to='/friends'>
              <Add/>
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <div style={styles.Right}>
              <IconButton component={Link} to='/bank'>
							  <AccountBalance/>
              </IconButton>
            </div>
          </Grid>

          <Grid item xs={8} style={styles.Balance}>
            <h1 style={ store.balance < 0 ? {color:'red'} : {color:'green'}}>${formatMoney(store.balance)}</h1>
          </Grid>
          <Grid item xs={4} style={styles.Rating}>
            <h4>Rating <br/>{this.state.rating}</h4>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default DashboardHeader;
