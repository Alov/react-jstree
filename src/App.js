import logo from './logo.svg';
import './App.css';
import $ from 'jquery'
import React from 'react';
import 'jstree'

class App extends React.Component {

    componentDidMount() {
        $('#jstree').jstree({ 'core' : {
                'data' : [
                    'Simple root node',
                    {
                        'text' : 'Root node 2',
                        'state' : {
                            'opened' : true,
                            'selected' : true
                        },
                        'children' : [
                            { 'text' : 'Child 1' },
                            'Child 2'
                        ]
                    }
                ]
            }});
    }

    render() {
        return (
            <div className="App">
                <div id="jstree"></div>
            </div>
        );
    }
}

export default App;
