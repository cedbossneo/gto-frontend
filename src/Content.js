import React, {Component} from 'react';
import axios from 'axios';
import RefreshIndicator from 'material-ui/RefreshIndicator'
import Paper from 'material-ui/Paper';

export default class Content extends Component{
    constructor(props) {
        super(props);
        this.state = {result: 'UNKNOWN', loading: true};
    }

    componentDidMount() {
        this.refreshTimer = setInterval(this.refreshResult, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.refreshTimer)
    }

    refreshResult = () => {
        this.setState({loading: true}, () => {
            axios.get("/backend/api/ping")
                .then((res) => {
                    this.setState({result: res.data.result, loading: false})
                }).catch(() => {
                this.setState({result: 'ERROR', loading: false})
            });
        });
    };

    get loadingComponent () {
        return <RefreshIndicator
            size={50}
            left={(window.innerWidth - 50) / 2}
            top={(window.innerHeight - 50) / 2}
            loadingColor="#FF9800"
            status="loading"
        />
    }

    get resultComponent () {
        return <Paper style={{margin: 10, height: 200, textAlign: 'center', paddingTop: 80}}>
            <h3>Result: {this.state.result}</h3>
        </Paper>
    }

    render() {
        return this.state.loading ? this.loadingComponent : this.resultComponent
    }
}