import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Chart = () => {
    const [chart,setChart] = useState(0)
    const {pathname} = useLocation()
    useEffect(()=>{
        if(pathname === '/'){
            setChart(0)
         }
        if(pathname === '/contact'){
           setChart(20)
        }
        if (pathname === '/experience-tips') {
            setChart(40)
        }
        if (pathname === '/experience') {
            setChart(40)
        }
        if (pathname === '/education-tips') {
            setChart(60)
        }
        if (pathname === '/education') {
            setChart(60)
        }
        if (pathname === '/skill-tips') {
            setChart(80)
        }
        if (pathname === '/skills') {
            setChart(80)
        }
        if (pathname === '/finish-project') {
            setChart(100)
        }
    })
	return (
		<ChartStyled>
			<ChartDiv>
                <ChartItem chart = {chart}/>
            </ChartDiv>
		</ChartStyled>
	)
}

const ChartStyled = styled.div`
	width: 100%;
	height: 10px;
	/* background-color: ; */
	display: flex;
	justify-content: center;
	align-items: center;
`
const ChartDiv = styled.div`
	width: 100%;
	height: 10px;
	background-color: #b9b9b9;
`
const ChartItem = styled.div`
    width: ${props=>props.chart + '%'};
    height: 100%;
    background-color: #ff0320;
    transition: all 0.3s;
`

export default Chart
