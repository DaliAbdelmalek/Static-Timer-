import React, { Component } from 'react';
import './statictimer.css'
class Timer extends Component {
    state = {}
    render() {
        return (
            <div className='time'>
                <div>
                    <p>00:</p>
                    <p className='timer'>Hour</p>
                </div>
                <div>
                    <p>30:</p>
                    <p className='timer'>Minute</p>
                </div>
                <div>
                    <p>00</p>
                    <p className='timer'>Second</p>
                </div>
            </div>
        );
    }
}

export default Timer;