import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

//Import FusionMaps
import FusionMaps from 'fusioncharts/maps/es/fusioncharts.india';
import INDIA from 'fusioncharts/fusioncharts.maps'

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, FusionMaps, INDIA, FusionTheme);

const colorrange = {
    "minvalue": "920000",
    "startlabel": "Low",
    "endlabel": "High",
    "code": "#e44a00",
    "gradient": "0",
    "color": [{
        "maxvalue": "56580000",
        "displayvalue": "Facebook",
        "code": "#1877f2"
    }, {
        "maxvalue": "97400000",
        "displayvalue": "YouTube",
        "code": "#ff0000"
    },
    {
        "maxvalue": "56580000",
        "displayvalue": "Quora",
        "code": "#aa2200"
    },
    {
        "maxvalue": "56580000",
        "displayvalue": "Instagram",
        "code": "#c32aa3"
    },
    {
        "maxvalue": "56580000",
        "displayvalue": "Twitter",
        "code": "#1da1f2"
    },
    {
        "maxvalue": "56580000",
        "displayvalue": "Pinterest",
        "code": "#bd081c"
    },
    {
        "maxvalue": "56580000",
        "displayvalue": "LinkedIn",
        "code": "#007bb5"
    }
    ]
};

// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: 'india', // The chart type
    width: '550', // Width of the chart
    height: '550', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
        // Map Configuration
        "chart": {
            "showBorder": "1",
            "borderColor": "#666666",
            "borderThickness": "1",
            "borderAlpha": "80",
            "bgColor": "#27293d",
            // "caption": "Social Trend in India",
            "subcaption": "Social Trend in India",
            // "numbersuffix": "%",
            // "includevalueinlabels": "1",
            // "labelsepchar": ": ",
            "entityFillHoverColor": "#ffac33",
            "theme": "fusion"
        },
        // Aesthetics; ranges synced with the slider
        "colorrange": colorrange,
        // Source data as JSON --> id represents countries of the world.
        // "data": dataset
    }
}

const QuickGuide = () => (
    <div className="content">
        <Row>
            <Col md="12">
                <Card>

                    <CardHeader className="mb-5">

                        <CardTitle tag="h2">
                            Statistics
                                                </CardTitle>
                    </CardHeader>

                    <CardBody>



                        <h4>Digital and Social Media Landscape in India</h4>

                        <ReactFC {...chartConfigs} />

                        <h5 className="text-success" style={{ marginLeft: "5em" }}>INTERNET PENETRATION & AUDIENCE</h5>
                        <p className="text-primary" style={{ marginLeft: "5em", marginBottom: "2em" }}>
                            The number of internet users had increased over the years in rural as well as urban areas. This is expected to cross the 639 million mark by December 2020.<br /> <br />India has 574 million active Internet users as of 2019. India is the second-largest online market, behind China. It is estimated that by December 2020 there will be around 639 million active internet users in India. The majority of India’s internet users are mobile phone internet users, who take advantage of cheap alternatives to expensive broadband/ Wi-Fi connections that require PC, laptop, and other equipment. Indian mobile data users consume 11 gigabits (GB) of data each month on average, India is the highest globally, ahead of markets like China, the US, France, South Korea, Japan, Germany, and Spain. The overall data traffic in India increased by 47% in 2019 driven by continued 4G consumption. 4G constituted 96% of the total data traffic consumed across the country while 3G data traffic registered its highest-ever decline of 30%. Indians have 1.2 billion mobile phone subscriptions and will be downloaded in 2019.<br /> <br />At a state level, NCT of Delhi has registered the highest internet penetration followed by Kerala, J&K, Haryana, Himachal Pradesh, Punjab. States in the east of India except for Assam and North East, have low internet penetration.<br /> <br />Internet penetration is rising throughout India, the situation is different when it comes to metros with Mumbai having the highest internet population closely followed by Delhi. Overall top 8 metros have the most penetration of Internet users and smaller towns have relatively lesser penetration of the Internet as we descend to lower town classes.<br /> <br />Among state groups, Kerala, Tamil Nadu and NCT of Delhi have a higher proportion of female internet users. The split of Male and Female users is 60:40 in Metros with a 5 million-plus population size.<br /> <br />Government initiatives in Kerala like bringing high-speed internet to every household, including its 2 million Below Poverty Line families who would get service for free will aid in reaching out to more potential internet users.<br /> <br /><b>Source:</b> Internet & Mobile Association of India (IAMAI)
</p>

                        <h5 className="text-success" style={{ marginLeft: "5em" }}>TOP SOCIAL NETWORKING SITES</h5>
                        <p className="text-primary" style={{ marginLeft: "5em", marginBottom: "2em" }}>
                            Indians now download more apps than residents of any other country – over 19 billion apps were downloaded by Indian users in 2019, resulting in a 195 % growth over 2016 data.The average Indian social media user spends 17 hours on the platforms each week, more than social media users in China and the United States. Indian internet users are fond of social media. In 2021, it is estimated that there will be around 448 million social network users in India, a significant increase from 2019 where it figures at 351 million. Facebook is the most popular social networking site in the country. There are about 270 million Facebook users in India as 2019, placing India as the country with the largest Facebook user base in the world.<br /> <br />The IPL, one in many cricketing events followed religiously in India, had the highest attendance among all cricket leagues worldwide. Apart from the attendance, fans seemed to be keen on updates about their favorite teams. The IPL teams registered over 59 million likes on Facebook alone and more than 81 million followers on Twitter. Most of the Facebook usage came from the younger generation, aged between 18-24 years to be precise, with over 97 million users in 2018. Increased availability of internet connections and access in recent years, propelled by the central government’s Digital India initiative was directly proportional in the growth of social media users.<br /> <br /><b>Source:</b> SEMrush, App Annie, Statista reports 2019
</p>

                        <h5 className="text-success" style={{ marginLeft: "5em" }}>ACTIVE SOCIAL MEDIA USERS IN INDIA</h5>
                        <p className="text-primary" style={{ marginLeft: "5em", marginBottom: "2em" }}>
                            With the ease of internet access, the number of active social media users in India stood at 330 million in 2019 and it is expected to reach 448 million by 2023.<br /> <br />290 million active social media users in India access social networks through their mobile devices. Median age of India is 27.1 years. Millennials and Gen Z are the main contributors for social media usage in India. 52.3 % of social media results come from millennials. 28.4 % of social media conversations are from Gen Z and 15.1 % from those aged 35-44. 97 % of Indians who are connected to the internet watch videos online.<br /> <br />Facebook and YouTube are the most popular social media networks in India, Amazon and Flipkart are the most popular online shopping platforms and TikTok is the most downloaded app of 2019.<br /> <br />The entry of WhatsApp into India’s digital market boosted app usage, with a doubling in rural areas in recent years. Data shows that the reach of the messaging service extends wider than just urban areas. Other popular apps include TikTok and Instagram.<br /> <br />Social video app TikTok has been a huge hit in India, it has reached 1.5 billion downloads worldwide on the App Store as well as Google Play and India leads the chart with 466.8 million or about 31% of all unique installs. <br /> <br /><b>Source:</b> Statista reports 2019 and Kantar IMRB ICUBE Report
</p>

                        <h5 className="text-success" style={{ marginLeft: "5em" }}>SOCIAL MEDIA USAGE IN INDIA</h5>
                        <p className="text-primary" style={{ marginLeft: "5em", marginBottom: "2em" }}>
                            As data packs get cheaper and internet more accessible, Smartphones are increasingly becoming the primary screen for Indian customers, which means, the smartphone and its applications become the principal source of news for about 35% of the country’s internet users, a majority of whom use one or more social networks.<br /> <br />With more than 1 in 3 individuals accessing the Internet in India, penetration in urban is twice that in rural. On average, Indian users spend 2.4 hours on social media a day (slightly below the global average of 2.5 hours a day).<br /> <br />The female population is half of the male Internet population. There is a huge gap between male and female internet user numbers, which worsens in the rural context.<br /> <br />Rural India has 264 million internet users and this is expected to reach 304 million in 2020. Rural India has a sizable portion that is devoid of internet access.  Thus, there is immense headroom for growth which will contribute to an increase in the overall internet population over the next few years.<br /> <br />Among state groups, Kerala, Tamil Nadu, and Delhi have a higher proportion of female internet users. The split of Male and Female users is 60:40 in Metros with a 5 million-plus population size.<br /> <br />Overall top 8 metros have the most penetration of Internet users and smaller towns have relatively lesser penetration of the Internet as we descend to lower town classes.<br /> <br />Two-thirds of Internet users in India are in the age group of 12-29 years. A higher proportion of this age group is seen in rural areas. Hence, showcasing there is potential for growth in this segment.<br /> <br /><b>Source:</b> Internet & Mobile Association of India (IAMAI), GlobalWebIndex
</p>

                        <h5 className="text-success" style={{ marginLeft: "5em" }}>DIGITAL AD SPENDING</h5>
                        <p className="text-primary" style={{ marginLeft: "5em", marginBottom: "2em" }}>
                            Digital grew by 37%, adding $613 million to Adex, to reach a size of $2.2 billion in 2019.<br /> <br />Digital advertising includes the ad-spend on video across all digital formats from social media, Over the top platforms including YouTube, gaming, news, and other websites. The share of the video is the highest today and growing at the fastest rate among all digital advertising formats.<br /> <br />In line with global trends, the Indian consumer is increasingly consuming the content on digital platforms. This trend is observed for all types of content including news (text), music (audio), or video. Increasing internet penetration and mobile device proliferation has led to strong factors encouraging greater consumption of content on the internet in India. The broadband subscriber base has grown 37% for 2019 which beats overall growth in internet users. The OTT video segment has seen the maximum traction in the last couple of years. With more than 30 OTT video platforms in the country, multiple audio streaming options and emerging gaming ecosystem has led to an increase in video and audio consumption as there are more diversity and quality in the content. It is estimated that the digital market in India is set to become the second-largest within media and entertainment behind TV by 2022 which will lead to more content creation and more advertisement opportunities.
</p>


                    </CardBody>
                </Card>
            </Col>
        </Row>
    </div>
);

export default QuickGuide;
