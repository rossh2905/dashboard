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
import BarChart from "variables/BarChart2";
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
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts3.js";

function Operation1() {
  return (
    <>
      <div className="content">
        <h1>Operation 1</h1>
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
                            <CardTitle tag="p">78</CardTitle>
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
                          <CardTitle tag="p">5382$</CardTitle>
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
                    data={dashboardEmailStatisticsChart.data}
                    options={dashboardEmailStatisticsChart.options}
                  />
                </CardBody>
                <hr/>
                <CardFooter>
                  <div className="chart-legend">
                    <i className="fa fa-circle text-warning" /> Envoi: 11 822 (69%){" "}<br/>
                    <i className="fa fa-circle text-danger" /> Ouverture: 3684 (23%){" "}<br/>
                    <i className="fa fa-circle text-info" /> Clics: 976 (8%)
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
                      <td>#0</td>
                      <td>12-19 mars</td>
                      <td>Sequence 7 mails Article Diction</td>
                      <td>11735</td>
                      <td>3682</td>
                      <td>31,4%</td>
                      <td>1142</td>
                      <td>31,0%</td>
                      <td>12</td>
                      <td>1,1%</td>
                    </tr>
                    <tr>
                      <td>#1</td>
                      <td>25/03/2020</td>
                      <td>En profiter pour nous muscler ?</td>
                      <td>11922</td>
                      <td>1603</td>
                      <td>13,4%</td>
                      <td>256</td>
                      <td>16,0%</td>
                      <td></td>
                      <td>0,0%</td>
                    </tr>
                    <tr>
                      <td>#1b</td>
                      <td>25/03/2020</td>
                      <td>En profiter pour nous muscler ?</td>
                      <td>10646</td>
                      <td>919</td>
                      <td>8,6%</td>
                      <td>124</td>
                      <td>13,5%</td>
                      <td>10</td>
                      <td>8,1%</td>
                    </tr>
                    <tr>
                      <td>#2</td>
                      <td>26/03/2020</td>
                      <td>Nous avons été surpris…</td>
                      <td>11902</td>
                      <td>1676</td>
                      <td>14,1%</td>
                      <td>208</td>
                      <td>12,4%</td>
                      <td>4</td>
                      <td>1,9%</td>
                    </tr>
                    <tr>
                      <td>#3</td>
                      <td>27/03/2020</td>
                      <td>Pour bien profiter de la crise : mon tuyau</td>
                      <td>11887</td>
                      <td>1451</td>
                      <td>12,2%</td>
                      <td>130</td>
                      <td>9,0%</td>
                      <td>18</td>
                      <td>13,8%</td>
                    </tr>
                    <tr>
                      <td>#4</td>
                      <td>28/03/2020</td>
                      <td>2 formations pour le prix d’une</td>
                      <td>11867</td>
                      <td>1331</td>
                      <td>11,2%</td>
                      <td>200</td>
                      <td>15,0%</td>
                      <td></td>
                      <td>0,0%</td>
                    </tr>
                    <tr>
                      <td>#5</td>
                      <td>28/03/2020</td>
                      <td>Retrait de votre droit</td>
                      <td>11852</td>
                      <td>1946</td>
                      <td>16,4%</td>
                      <td>268</td>
                      <td>13,8%</td>
                      <td>34</td>
                      <td>12,7%</td>
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
                      <td>11822</td>
                      <td>3684</td>
                      <td>31,2%</td>
                      <td>976</td>
                      <td>26,5%</td>
                      <td>78</td>
                      <td>8,0%</td>
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

export default Operation1;
