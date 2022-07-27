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
  dashboardEmailStatisticsChart,
} from "variables/charts3.js";
import {
  dashboardEmailStatisticsChart2,
} from "variables/charts4.js";

function Bilan() {
  return (
    <>
      <div className="content">
        
        <Row>
          <Col>
          <h1>Diction</h1>
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
          </Col>
          <Col>
          <h1>Parler vite</h1>
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
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Bilan;
