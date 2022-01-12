import React from "react";
import logo from "../../assets/icons/logo.png";
import effect from "../../assets/icons/box.png";
import rocket from "../../assets/icons/rocket.png";
import line from "../../assets/icons/line.png";
import "./home.scss";
function Home() {
    return (
        <div className="home_container">
            <div className="home_layout">
                <div className="home_navbar">
                    <div className="home_header">
                        <img src={logo} className="home_logo" />
                        <img src={line} className="home_line" />
                        <div className="nav_bar_group">
                            <a className="nav_bar_text">BUT MINT</a>
                            <a className="nav_bar_text" href="/stake">
                                STAKE
                            </a>
                            <a className="nav_bar_text">BOND</a>
                            <a className="nav_bar_text">DOCS</a>
                        </div>
                    </div>
                    <button className="enter_btn">ENTER APP</button>
                </div>
                <div className="lanch_text_group">
                    <p className="home_lanch_text">The First NFT Launchpad:</p>
                    <p className="home_lanch_text">Stake, Generate, & Deploy</p>
                </div>
                <div className="desc_text_group">
                    <p className="token_description">
                        Fully built launchpads for all your blockchain needs powered by <b>MINT.</b>
                    </p>
                    <p className="token_description">
                        Stake your <b>MINT</b> and earn compounding rewards.
                    </p>
                </div>
                <div className="home_info lanch_text_group">
                    <div className="token_col">
                        <span className="balance_description">Treasury Balance</span>
                        <span className="token_balance">$999,999,999</span>
                    </div>
                    <div className="token_col">
                        <span className="balance_description">Total Value Locked</span>
                        <span className="token_balance">$999,999,999</span>
                    </div>
                    <div className="token_col">
                        <span className="balance_description">Current APY</span>
                        <span className="token_balance">100,000%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
