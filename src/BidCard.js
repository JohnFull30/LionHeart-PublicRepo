import React from 'react'
import { Button } from 'reactstrap'

export default function BidCard() {
    return (
        <div class="card shadow" >
            <div className="card-body">
                <h5 className="card-title">Place your Bid</h5>
                <div className="d-flex justify-content-center">
                    <p>+</p>
                    <h6 className="card-subtitle mb-2 text-muted px-5">$18/h</h6>
                    <p>-</p>

                </div>
                <p className="card-text">Winner will pay the second highest bi!</p>
                <Button block className="btn-warning">
                    Place bid
                </Button>
            </div>
        </div>
    )
}
