import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col
} from "reactstrap";
import { Form, FormGroup, Input } from "reactstrap";

const Posts = ({ posts, tableSearchcp, tableSearchap }) => {


    const handleSearchcp = (e) => {
        tableSearchcp(e.target.value.trim())
    };
    const handleSearchap = (e) => {
        tableSearchap(e.target.value.trim())
    };
    return (
        <Row>
            <Col md="12">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h4">Data Table</CardTitle>
                        <div>
                            <Form className="searchbox">
                                <FormGroup row>
                                    <Col sm={4}>
                                        <Input
                                            type="text"
                                            placeholder="Search entries in this page"
                                            onChange={(e) => handleSearchcp(e)}
                                        />
                                    </Col>
                                    <Col sm={4}>
                                        <Input
                                            type="text"
                                            placeholder="Search entries in all pages"
                                            onChange={(e) => handleSearchap(e)}
                                        />
                                    </Col>
                                </FormGroup>
                            </Form>

                        </div>
                    </CardHeader>
                    <CardBody>
                        <Table className="tablesorter" responsive>
                            <thead className="text-primary">
                                <tr>
                                    <th>Title</th>
                                    <th>topic</th>
                                    <th>Intensity</th>
                                    <th className="text-center">Sector</th>
                                    <th>Region</th>
                                    <th>Pestle</th>
                                </tr>
                            </thead>
                            {posts.map(post => (

                                <tbody>
                                    <tr>
                                        <td><a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a></td>
                                        <td>{post.topic}</td>
                                        <td className="text-center">{post.intensity}</td>
                                        <td className="text-center">{post.sector}</td>
                                        <td>{post.region}</td>
                                        <td>{post.pestle}</td>
                                    </tr>

                                </tbody>

                            ))}
                        </Table>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default Posts;
