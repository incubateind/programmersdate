import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import data from '../assets/data/sample';
import { seriesmapi, seriesmapl, seriesmapr } from '../assets/data/seriesmapi'
let FilterCountry = new Set();
let FilterSector = new Set();
const HeatMap = ({ measure, nodeData }) => {

    const [series, setseries] = useState(seriesmapi);
    const [options, setoptions] = useState({});
    const [fromlow, setfromlow] = useState(0);
    const [tolow, settolow] = useState(0);
    const [frommed, setfrommed] = useState(0);
    const [tomed, settomed] = useState(0);
    const [fromhigh, setfromhigh] = useState(0);
    const [tohigh, settohigh] = useState(0);


    useEffect(() => {



        data.map((res, i) => (
            FilterCountry.add(res.country)
        ))
        let Countries = [...new Set(FilterCountry)].sort();
        Countries.shift();

        data.map((res, i) => (
            FilterSector.add(res.sector)
        ))
        let Sector = [...new Set(FilterSector)].sort();
        Sector.shift();

        const intensity = () => {
            Sector.map((sec, si) => (
                Countries.map((cont, ci) => (
                    data.map((res, di) => (
                        (res.sector === sec && res.country === cont) ? seriesmapi.map((series, sei) => ((sec === series.name) ? ((res.intensity !== "" && res.intensity > series.data[ci]) ? series.data.splice(ci, 1, res.intensity) : 0) : 0)) : 0
                    ))
                ))
            ))
            setseries(seriesmapi);
            setfromlow(0);
            settolow(5);
            setfrommed(6);
            settomed(30);
            setfromhigh(31);
            settohigh(100);
        }
        const likelihood = () => {

            Sector.map((sec, si) => (
                Countries.map((cont, ci) => (
                    data.map((res, di) => (
                        (res.sector === sec && res.country === cont) ? seriesmapl.map((series, sei) => ((sec === series.name) ? ((res.likelihood !== "" && res.likelihood > series.data[ci]) ? series.data.splice(ci, 1, res.likelihood) : 0) : 0)) : 0
                    ))
                ))
            ))
            setseries(seriesmapl);
            setfromlow(0);
            settolow(1.9);
            setfrommed(2);
            settomed(3.9);
            setfromhigh(4);
            settohigh(100);
        }

        const relevance = () => {
            Sector.map((sec, si) => (
                Countries.map((cont, ci) => (
                    data.map((res, di) => (
                        (res.sector === sec && res.country === cont) ? seriesmapr.map((series, sei) => ((sec === series.name) ? ((res.relevance !== "" && res.relevance > series.data[ci]) ? series.data.splice(ci, 1, res.relevance) : 0) : 0)) : 0
                    ))
                ))
            ))
            setseries(seriesmapr);
            setfromlow(0);
            settolow(2.9);
            setfrommed(3);
            settomed(4.9);
            setfromhigh(5);
            settohigh(100);
        }

        measure === "intensity" ? intensity() : measure === "likelihood" ? likelihood() : relevance();


        setoptions({

            chart: {
                events: {
                    dataPointSelection: function (event, chartContext, config) {
                        let secname = seriesmapi[config.seriesIndex].name;
                        let secpoint = seriesmapi[config.seriesIndex].data[config.dataPointIndex];
                        let cnt = Countries[config.dataPointIndex];
                        let ChartData = {
                            country: "",
                            intensity: "",
                            relevance: "",
                            likelihood: "",
                            title: "",
                            url: "",
                        };

                        data.map((res, di) => (
                            (res.sector === secname && res.intensity === secpoint && res.country === cnt) ? (
                                ChartData = {
                                    country: res.country,
                                    intensity: res.intensity,
                                    relevance: res.relevance === 1 ? "Vague" : res.relevance === 2 ? "Early stage" : res.relevance === 3 ? "Gaining Traction" : res.relevance === 4 ? "Evolving" : res.relevance === 5 ? "Established" : res.relevance === 6 ? "Expansionary" : res.relevance === 7 ? "Growing" : "",
                                    likelihood: res.likelihood === 1 ? "Potential" : res.likelihood === 2 ? "Possible" : res.likelihood === 3 ? "Probabble" : res.likelihood === 4 ? "Business as Usual" : "",
                                    title: res.title,
                                    url: res.url,
                                }
                            ) : null
                        ))

                        nodeData(ChartData)
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#9A9A9A",
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    },
                },
            },
            xaxis: {
                categories: Countries,

                labels: {
                    style: {
                        colors: "#9A9A9A",
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-xaxis-label',
                    },

                },

            },

            plotOptions: {
                heatmap: {

                    radius: 2,
                    enableShades: true,
                    shadeIntensity: 0.5,
                    reverseNegativeShade: true,
                    distributed: false,
                    useFillColorAsStroke: false,
                    colorScale: {

                        ranges: [{
                            from: fromlow,
                            to: tolow,
                            name: 'low',
                            color: '#128FD9',
                        },
                        {
                            from: frommed,
                            to: tomed,
                            name: 'medium',
                            color: '#00A100',
                        },
                        {
                            from: fromhigh,
                            to: tohigh,
                            name: 'high',
                            color: '#FF0000',

                        }
                        ]
                    }
                }
            },
            dataLabels: {
                enabled: false
            },

            stroke: {
                width: 2
            },
            noData: {
                text: 'Loading...'
            },

        })


    }, [measure, fromlow, tolow, frommed, tomed, fromhigh, tohigh, nodeData])

    return (
        <div className="app">
            <div className="row">
                <div className="mixed-chart">
                    <Chart options={options} height="500px" width="1800px"
                        series={series} type="heatmap" />
                </div>
            </div>
        </div>
    )
}


export default HeatMap;

