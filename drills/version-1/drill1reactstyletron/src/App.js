import React, { useState, useEffect } from 'react';
import StageBlock from "./components/bricks/StageBlock";
import Card from "./components/bricks/Card";
import CardHeadline from "./components/bricks/CardHeadline";
const App = ()=> {
    const [listings, setListings] = useState({jobs:[]})
    const fetchData = () => {
        fetch('./listings.json')
            .then(res => res.json())
            .then(data => {
                setListings({jobs: data })
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const item = listings.jobs.map((job, index) => {
        return (
            <Card key={index}>
                <CardHeadline>
                    {job.title}
                </CardHeadline>
                <CardHeadline
                    injectStyles={{ color: 'green', fontSize: '15px' }}
                >
                    {job.pay}
                </CardHeadline>
                {job.description}
            </Card>
        )
    })
  return (
    <div className="App">
        <StageBlock
        flexCenter={true}
        injectStyles={{ flexDirection: 'column' }}
        >
            {item}
        </StageBlock>
    </div>
  );
}

export default App;

