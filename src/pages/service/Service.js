import { Col, Row, Table } from "react-bootstrap";
import { API } from "../../config/api";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarGeneral from "../../component/navbar/general";
import Navbar from "../../component/navbar/sidebar";
import Chart from "../../component/chart/chart";
import MySidebar from "../../component/navbar/sidebar";
import General from "../../assets/general.png";
import Ops from "../../assets/ops.png";
import Spp from "../../assets/monthly.png";
import Mahad from "../../assets/mahad.png";
import Uniform from "../../assets/uniform.png";
import Sarpras from "../../assets/sarpras.png";
import Savings from "../../assets/savings.png";
import Gsmb from "../../assets/book.png";
import Dorm from "../../assets/dorm.png";
import Asso from "../../assets/association.png";
import Donations from "../../assets/donation.png";
import Locker from "../../assets/locker.png";
import Journal from "../../assets/journal.png";
import Transaction from "../../assets/transaction.png";
import Report from "../../assets/finance-report.png";
import Atk from "../../assets/stationery.png";
import Honor from "../../assets/honor.png";
import Insentif from "../../assets/insentif.png";
import Imburse from "../../assets/imbursement.png";
import Kitchen from "../../assets/kitchen.png";
import Wifi from "../../assets/wifi.png";
import Build from "../../assets/build.png";
import Service from "../../assets/mandatory.png";
import Guest from "../../assets/guest.png";
import Cash from "../../assets/wallet.png";

function LandingPages() {
  const [expandedJournal, setExpandedJournal] = useState(false);
  const [journal, setJournal] = useState([]);
  const [ledger, setLedger] = useState(false);
  const [expandedCred, setExpandedCred] = useState(true);
  const [expandedDebt, setExpandedDebt] = useState(true);
  const openJournal = async () => {
    setLedger(!ledger);
    try {
      const response = await API.get("/journals");
      setJournal(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  const toggleExpanded = () => {
    setExpandedJournal(!expandedJournal);
    setExpandedTrans(false);
    setExpandedReport(false);
    setExpandedCred(true);
    setExpandedDebt(true);
  };

  const [expandedTrans, setExpandedTrans] = useState(false);
  const toggleExpandedTrans = () => {
    setExpandedTrans(!expandedTrans);
    setExpandedJournal(false);
    setExpandedReport(false);
  };

  const [expandedReport, setExpandedReport] = useState(false);
  const toggleExpandedReport = () => {
    setExpandedJournal(false);
    setExpandedTrans(false);
    setExpandedReport(!expandedReport);
    setExpandedDebt(true);
  };

  const toggleExpandedCred = () => {
    setExpandedCred(!expandedCred);
    setExpandedDebt(true)
  };

  const toggleExpandedDebt = () => {
    setExpandedDebt(!expandedDebt);
    setExpandedCred(true)
  };
  return (
    <div className="App">
      <Row>
        <Col sm={1} md={1} className="ms-3">
          <Navbar />
        </Col>
        <Col sm={2} md={2}>
          <Row>
            <Col sm={4} md={4}>
              <div
                className={`${
                  expandedJournal
                    ? "topBarActive mt-5 ms-1"
                    : "topBar mt-5 ms-1"
                }`}
                onClick={toggleExpanded}
              >
                <div className="homeMenu">
                  <img src={Journal} className="menuIconSub mt-1" />
                </div>
                <div className="textMenu">Journal</div>
              </div>
            </Col>
            <Col sm={4} md={4}>
              <div
                className={`${
                  expandedTrans ? "topBarActive mt-5 ms-1" : "topBar mt-5 ms-1"
                }`}
                onClick={toggleExpandedTrans}
              >
                <div className="homeMenu">
                  <img src={Transaction} className="menuIconSub mt-1" />
                </div>
                <div className="textMenu">Transaction</div>
              </div>
            </Col>

            <Col sm={4} md={4}>
              <div
                className={`${
                  expandedReport ? "topBarActive mt-5 ms-1" : "topBar mt-5 ms-1"
                }`}
                onClick={toggleExpandedReport}
              >
                <div className="homeMenu">
                  <img src={Report} className="menuIconSub mt-1" />
                </div>
                <div className="textMenu">Report</div>
              </div>
            </Col>
          </Row>
          <Col
            sm={12}
            md={12}
            className={`${expandedJournal ? "menubarActive" : "menubar"}`}
          >
            <div>
              <div className="barMenu mt-3 m-1">
                <div className="nonActiveFull">
                  <div className="homeMenu">
                    <img src={General} className="menuIconSub" />
                  </div>
                  <div className="textMenu" onClick={openJournal}>
                    General
                  </div>
                </div>
                <div className="activeFull">
                  <div className="homeMenu">
                    <img src={Ops} className="menuIconSub" />
                  </div>
                  <div className="textMenu">Oprational</div>
                </div>
                <div className="nonActiveFull">
                  <div className="homeMenu">
                    <img src={Spp} className="menuIconSub" />
                  </div>
                  <div className="textMenu">Monthly</div>
                </div>
              </div>

              <div className="barMenu mt-3 m-1">
                <div className="nonActiveFull">
                  <div className="homeMenu">
                    <img src={Mahad} className="menuIconSubActive" />
                  </div>
                  <div className="textMenu">Mahad</div>
                </div>
                <div className="nonActiveFull">
                  <div className="homeMenu">
                    <img src={Uniform} className="menuIconSub" />
                  </div>
                  <div className="textMenu">Uniform</div>
                </div>
                <div className="nonActiveFull">
                  <div className="homeMenu">
                    <img src={Sarpras} className="menuIconSub" />
                  </div>
                  <div className="textMenu">Sarpras</div>
                </div>
              </div>

              <div className="barMenu mt-3 m-1">
                <div className="nonActiveFull">
                  <div className="homeMenu">
                    <img src={Savings} className="menuIconSubActive" />
                  </div>
                  <div className="textMenu">Savings</div>
                </div>
                <div className="nonActiveFull">
                  <div className="homeMenu">
                    <img src={Gsmb} className="menuIconSub" />
                  </div>
                  <div className="textMenu">Book</div>
                </div>
                <div className="nonActiveFull">
                  <div className="homeMenu">
                    <img src={Dorm} className="menuIconSub" />
                  </div>
                  <div className="textMenu">Dorm</div>
                </div>
              </div>

              <div className="barMenu mt-3 m-1">
                <div className="nonActiveFull">
                  <div className="homeMenu">
                    <img src={Asso} className="menuIconSubActive" />
                  </div>
                  <div className="textMenu">Paguyuban</div>
                </div>
                <div className="nonActiveFull">
                  <div className="homeMenu">
                    <img src={Locker} className="menuIconSub" />
                  </div>
                  <div className="textMenu">Locker</div>
                </div>
                <div className="nonActiveFull">
                  <div className="homeMenu">
                    <img src={Donations} className="menuIconSub" />
                  </div>
                  <div className="textMenu">Donations</div>
                </div>
              </div>
            </div>
          </Col>

          <Col
            sm={12}
            md={12}
            className={`${
              expandedTrans ? "menubarActiveTrans p-1 mt-3" : "menubar"
            }`}
          >
            <div className="">
              <div className="barMenu">
                <div className="nonActiveTrans">
                  <div className="homeMenu">
                    {/* <img src={General} className='menuIconSub'/> */}
                  </div>
                  <div onClick={toggleExpandedDebt} className="textMenuTrans">DEBT</div>
                </div>
                <div className="activeTrans">
                  <div className="homeMenuTrans">
                    {/* <img src={Ops} className='menuIconSub'/> */}
                  </div>
                  <div onClick={toggleExpandedCred} className="textMenuTrans">
                    CREDIT
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <div
            className={`${
              expandedCred
                ? "menubarNonActiveDebtCredit mt-3 p-2"
                : "menubarActiveDebtCredit mt-3 p-2"
            }`}
          >
{/* For Output */}
            <div className="barMenu mt-2 m-1">
              <div className="roundMenu">
                <img src={Atk} className="menuIconRound rounded-circle" />
                <div className="menuTextDebt m-1">Operational</div>
              </div>
              <div className="roundMenu">
                <img src={Honor} className="menuIconRound rounded-circle" />
                <div className="menuTextDebt m-1">Honorarium</div>
              </div>
              <div className="roundMenu">
                <img src={Insentif} className="menuIconRound rounded-circle" />
                <div className="menuTextDebt m-1">Incentive</div>
              </div>
            </div>

            <div className="barMenu mt-3 m-1">
              <div className="roundMenu">
                <img src={Imburse} className="menuIconRound rounded-circle" />
                <div className="menuTextDebt m-1">Imbursement</div>
              </div>
              <div className="roundMenu">
                <img src={Kitchen} className="menuIconRound rounded-circle" />
                <div className="menuTextDebt m-1">Kitchen</div>
              </div>
              <div className="roundMenu">
                <img src={Wifi} className="menuIconRound rounded-circle" />
                <div className="menuTextDebt m-1">WIFI, PLN, PDAM</div>
              </div>
            </div>

            <div className="barMenu mt-3 m-1">
              <div className="roundMenu">
                <img src={Build} className="menuIconRound rounded-circle" />
                <div className="menuTextDebt m-1">Mahad</div>
              </div>
              <div className="roundMenu">
                <img src={Service} className="menuIconRound rounded-circle" />
                <div className="menuTextDebt m-1">Mandatory Payments</div>
              </div>
              <div className="roundMenu">
                <img src={Guest} className="menuIconRound rounded-circle" />
                <div className="menuTextDebt m-1">Guest Service</div>
              </div>
            </div>
          </div>

          <div
            className={`${
              expandedDebt
                ? "menubarNonActiveDebt mt-3 p-2"
                : "menubarActiveDebt mt-3 p-2"
            }`}
          >
{/* For Output */}
            <div className="barMenu mt-2 m-1">
              <div className="roundMenu">
                <img src={Cash} className="menuIconRound rounded-circle" />
                <div className="menuTextDebt m-1">Cash</div>
              </div>
              <div className="roundMenu">
                <img src={Honor} className="menuIconRound rounded-circle" />
                <div className="menuTextDebt m-1">Honorarium</div>
              </div>
              <div className="roundMenu">
                <img src={Insentif} className="menuIconRound rounded-circle" />
                <div className="menuTextDebt m-1">Incentive</div>
              </div>
            </div>

            <div className="barMenu mt-3 m-1">
              <div className="roundMenu">
                <img src={Imburse} className="menuIconRound rounded-circle" />
                <div className="menuTextDebt m-1">Imbursement</div>
              </div>
              <div className="roundMenu">
                <img src={Kitchen} className="menuIconRound rounded-circle" />
                <div className="menuTextDebt m-1">Kitchen</div>
              </div>
              <div className="roundMenu">
                <img src={Wifi} className="menuIconRound rounded-circle" />
                <div className="menuTextDebt m-1">WIFI, PLN, PDAM</div>
              </div>
            </div>

            <div className="barMenu mt-3 m-1">
              <div className="roundMenu">
                <img src={Build} className="menuIconRound rounded-circle" />
                <div className="menuTextDebt m-1">Mahad</div>
              </div>
              <div className="roundMenu">
                <img src={Service} className="menuIconRound rounded-circle" />
                <div className="menuTextDebt m-1">Mandatory Payments</div>
              </div>
              <div className="roundMenu">
                <img src={Guest} className="menuIconRound rounded-circle" />
                <div className="menuTextDebt m-1">Guest Service</div>
              </div>
            </div>
          </div>
        </Col>

        <Col sm={5} md={5} className="ms-2">
          <div className="mainPage p-1 mt-5">
            <div className="subMainPage m-3">
              <div className="glass">
                <div className="headerMenu">
                  <div className="textHeader">
                    G E N E R A L &nbsp;&nbsp; L E D G E R
                  </div>
                </div>
                <Table size="lg table-striped">
                  <thead>
                    <tr>
                      <th width="1%" className="text-center">
                        No
                      </th>
                      <th>DESCRIPTION</th>
                      <th>DEBET</th>
                      <th>CREDIT</th>
                      <th>SALDO</th>
                    </tr>
                  </thead>
                  <tbody>
                    {journal.map((item, index) => (
                      <tr key={item.id}>
                        <td className="tableValue align-middle mt-2">
                          {index + 1}
                        </td>
                        <td className="tableValue align-middle mt-2">
                          {item.uraian}
                        </td>
                        <td className="tableValue align-middle mt-2">
                          {item.debet}
                        </td>
                        <td className="tableValue align-middle mt-2">
                          {item.kredit}
                        </td>
                        <td className="tableValue align-middle mt-2">
                          {item.saldoakhir}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default LandingPages;
