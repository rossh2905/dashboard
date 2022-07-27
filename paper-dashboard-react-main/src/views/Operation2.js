/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
import BarChart from "variables/BarChart3";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Table,
} from "reactstrap";
// core components
import {
  dashboardEmailStatisticsChart2,
} from "variables/charts4.js";

function Operation2() {
  return (
    <>
      <div className="content">
        <h1>Operation 2</h1>
        <Row>
          <Col>
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">Diagramme mensuel</CardTitle>
                <p className="card-category">Ventes</p>
              </CardHeader>
                <BarChart></BarChart>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xl="3" lg="12">
            <Row>
              <Col>
                  <Card className="card-stats">
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-money-coins text-success" />
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <p className="card-category">Ventes</p>
                            <CardTitle tag="p">50</CardTitle>
                            <p />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-tag-content text-danger" />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category">CA</p>
                          <CardTitle tag="p">3950$</CardTitle>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xl="9" lg="12">
            <Col>
              <Card>
                <CardBody style={{ height: "266px" }}>
                  <Pie
                    data={dashboardEmailStatisticsChart2.data}
                    options={dashboardEmailStatisticsChart2.options}
                  />
                </CardBody>
                <hr/>
                <CardFooter>
                  <div className="chart-legend">
                    <i className="fa fa-circle text-warning" /> Envoi: 8450 (75%){" "}<br/>
                    <i className="fa fa-circle text-danger" /> Ouverture: 2142 (17%){" "}<br/>
                    <i className="fa fa-circle text-info" /> Clics: 690 (8%)
                  </div>
                  <br/>
                </CardFooter>
              </Card>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th></th>
                      <th></th>
                      <th>Sujet</th>
                      <th>Envoi</th>
                      <th>Ouv.</th>
                      <th></th>
                      <th>Clics</th>
                      <th></th>
                      <th>Ventes</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>#1</td>
                      <td>20/02/2020</td>
                      <td>Mangez-vous parfois vos mots ?</td>
                      <td>8450</td>
                      <td>1048</td>
                      <td>12,4%</td>
                      <td>245</td>
                      <td>23,4%</td>
                      <td>12</td>
                      <td>4,9%</td>
                    </tr>
                    <tr>
                      <td>#2</td>
                      <td>21/02/2020</td>
                      <td>Quand soudain tout devient plus clair.</td>
                      <td>8399</td>
                      <td>958</td>
                      <td>11,4%</td>
                      <td>154</td>
                      <td>16,1%</td>
                      <td>5</td>
                      <td>3,2%</td>
                    </tr>
                    <tr>
                      <td>#3</td>
                      <td>22/02/2020</td>
                      <td>Découvrez comment maîtriser votre débit pour…</td>
                      <td>8389</td>
                      <td>573</td>
                      <td>6,8%</td>
                      <td>110</td>
                      <td>19,2%</td>
                      <td>6</td>
                      <td>5,5%</td>
                    </tr>
                    <tr>
                      <td>#4</td>
                      <td>23/02/2020</td>
                      <td>90% des gens qui parlent vite n’obtiendront pas…</td>
                      <td>8374</td>
                      <td>853</td>
                      <td>10,2%</td>
                      <td>104</td>
                      <td>12,2%</td>
                      <td>9</td>
                      <td>8,7%</td>
                    </tr>
                    <tr>
                      <td>#5</td>
                      <td>24/02/2020</td>
                      <td>Parlez vite = ne pas obtenir ce qu'on demande ?</td>
                      <td>7637</td>
                      <td>427</td>
                      <td>5,6%</td>
                      <td>40</td>
                      <td>9,4%</td>
                      <td>6</td>
                      <td>15,0%</td>
                    </tr>
                    <tr>
                      <td>#6</td>
                      <td>24/02/2020</td>
                      <td>Parler moins vite - Dernier jour de l'offre</td>
                      <td>8341</td>
                      <td>625</td>
                      <td>7,5%</td>
                      <td>60</td>
                      <td>9,6%</td>
                      <td>5</td>
                      <td>8,3%</td>
                    </tr>
                    <tr>
                      <td>#7</td>
                      <td>24/02/2020</td>
                      <td>Retrait de votre droit dans 6h</td>
                      <td>8329</td>
                      <td>759</td>
                      <td>9,1%</td>
                      <td>98</td>
                      <td>12,9%</td>
                      <td>19</td>
                      <td>19,4%</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>TOTAL (sauf sequence Prévente)</td>
                      <td>8450</td>
                      <td>2142</td>
                      <td>25,3%</td>
                      <td>690</td>
                      <td>32,2%</td>
                      <td>50</td>
                      <td>7,2%</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
      </div>
    </>
  );
}

export default Operation2;
