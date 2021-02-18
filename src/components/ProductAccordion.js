import { Accordion, Card } from 'react-bootstrap' //有用到動態效果就要import react-bootstrap
import { MdAdd } from 'react-icons/md'

// import { Card } from 'react-bootstrap/Accordion'

function ProductAccordion() {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <div className="info-head d-flex justify-content-between d-flex align-items-center">
              <h5 className="k-note">產品資訊</h5>
              <MdAdd />
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div className="info-body">
                <div className="k-xd-icon d-flex justify-content-between">
                  <span className="k-material-icons material-icons"></span>
                  <span className="k-material-icons material-icons"></span>
                  <span className="k-material-icons material-icons"></span>
                </div>

                <h5 className="info-body-text text-center">
                  酒精濃度：40% <br />
                  內容物：君度橙酒/龍眼蜜/檸檬皮/北海道鮮奶油
                  <br />
                  蛋糕體：千層蛋糕體
                  <br />
                  葷素：奶蛋素
                  <br />
                  規格：8吋
                  <br />
                  保存方式：冷藏
                  <br />
                  保存期限：冷藏1~2天內食用完畢，實際保存期限請見包裝標示
                </h5>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <div className="info-head d-flex justify-content-between d-flex align-items-center">
              <h5 className="k-note">注意事項</h5>
              <MdAdd />
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <div className="info-body">
                <ul className="k-ul-note">
                  <li className="note-list">
                    訂單運費$185元，滿$3,600元免運費。
                  </li>
                  <li className="note-list">
                    商品圖片僅供實物參考，內容物組成以實物及商品規格為主。
                  </li>
                  <li className="note-list">
                    如遇商品瑕疵需辦理退換貨者，請維持商品完整，保留原包裝，並於2日內辦理退換貨，逾期恕不受理。
                  </li>
                  <li className="note-list">
                    販售的蛋糕產品，屬消保法定義之生鮮食品，因此商品出貨後，除非商品本身重大瑕疵，概不接受消費者無條件退貨。
                  </li>
                  <li className="note-list">
                    訂購付款完成後，如因故需取消/變更訂單、或無法前往門市取貨，請在指定到貨日2天前於服務時間內來電通知客服人員取消或變更訂單。
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            <div className="info-head d-flex justify-content-between d-flex align-items-center">
              <h5 className="k-note">評價</h5>
              <MdAdd />
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <div className="info-body">
                <div className="k-commons">
                  <div className="member-common">
                    <div className="member-name">林*文</div>
                    <div className="common-text">
                      君度橙酒的香氣和帶點酸氣的檸檬奶油讓人欲罷不能，一口接一口啊！
                    </div>
                  </div>
                  <div className="member-common">
                    <div className="member-name">林*文</div>
                    <div className="common-text">
                      君度橙酒的香氣和帶點酸氣的檸檬奶油讓人欲罷不能，一口接一口啊！
                    </div>
                  </div>
                  <div className="member-common">
                    <div className="member-name">林*文</div>
                    <div className="common-text">
                      君度橙酒的香氣和帶點酸氣的檸檬奶油讓人欲罷不能，一口接一口啊！
                    </div>
                  </div>
                </div>

                <div className="add-common">
                  <form action="" className="pub-form">
                    <h5 className="form-title">新增評價</h5>
                    <label htmlFor="account ">使用者名稱</label>
                    <br />
                    <input
                      className="w-100 pub-input"
                      type="text"
                      name="acoount"
                      id="account"
                    />
                    <br />
                    <small></small>

                    <label htmlFor="password">電子郵件</label>
                    <br />
                    <input
                      className="w-100 pub-input"
                      type="text"
                      name="password"
                      id="password"
                    />
                    <small>請輸入正確的電子郵件格式</small>

                    <div className="mb-3">
                      <label htmlFor="validationTextarea">您的評價</label>
                      <textarea
                        className="form-control pub-textarea"
                        id=""
                        placeholder="請留下評價"
                        required
                      ></textarea>
                      <div className="invalid-feedback">請留下評價後再送出</div>
                    </div>

                    <button
                      type="button"
                      className="k-pub-button pub-mb-100 mx-auto"
                    >
                      送出評價
                    </button>
                  </form>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  )
}

export default ProductAccordion
