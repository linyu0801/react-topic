{
  /* cart1content1  */
}
;<div className="row">
  <div className="col-1"></div>
  <div className="col-10 hy-rwd">
    <form className="w-100 text-center hy-form" action="">
      <table className="w-100 hy-rwd-d-none">
        <thead className="w-100">
          <tr className="w-100">
            <th className=" hy-rwd-d-none"></th>
            <th className=" hy-rwd-d-none"></th>
            <th className=" hy-rwd-d-none">商品</th>
            <th className=" hy-rwd-d-none">規格</th>
            <th className=" hy-rwd-d-none">價格</th>
            <th className=" hy-rwd-d-none">數量</th>
            <th className=" hy-rwd-d-none">小計</th>
            <th className=" hy-rwd-d-none"></th>
          </tr>
        </thead>
        <tbody>
          {itemList.map((item, i) => {
            return (
              <tr key={i}>
                <td className="hy-rwd-d-none"></td>
                <td className="py-4 hy-rwd-d-none">
                  <div className="hy-img d-flex justify-content-center">
                    <img
                      src={`http://localhost:3000/k-images/` + item.p_img}
                      alt=""
                    />
                  </div>
                </td>
                <td className="hy-rwd-d-none">{item.p_name}</td>
                <td className="hy-rwd-d-none">{item.p_size}</td>
                <td className="hy-rwd-d-none">{item.p_price}</td>
                <td className="hy-rwd-d-none">
                  <span className="k-number">{item.quantity}</span>
                </td>

                <td className="hy-rwd-d-none">
                  {+item.quantity * +item.p_price}
                </td>

                <td className="hy-rwd-d-none"></td>
              </tr>
            )
          })}

          <tr>
            <td className="hy-w-5"></td>
            <td colSpan="9" className="hy-form-border"></td>
            <td className="hy-w-5"></td>
          </tr>
          <tr>
            <td className="py-4"></td>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan="2" className="hy-py-48">
              購物清單小計
            </td>
            <td>{orders1[0].amount}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      {/* M-版本 */}
      {/* M-商品清單開始 */}
      {itemList.map((item, i) => {
        return (
          <>
            <div key={i} className="d-md-none d-block">
              <div className="form-row hy-form-row justify-content-between mb-3">
                <div className="form-col hy-form-col">
                  <div className="hy-img">
                    <img
                      src={`http://localhost:3000/k-images/` + item.p_img}
                      alt=""
                    />
                  </div>
                </div>
                <div className="form-col hy-form-col d-flex flex-column justify-content-around">
                  <p className="my-0 k-left-icon hy-left-icon">{item.p_name}</p>
                  <p className="my-0">{item.p_size}</p>
                </div>
                <div className="form-col hy-form-col d-flex flex-column justify-content-center">
                  {/* <FaRegTimesCircle className="hy-color-gold" /> */}
                </div>
              </div>
              <div className="form-row hy-form-row justify-content-between">
                <div className="form-col hy-form-col">
                  <p>單價</p>
                </div>
                <div className="form-col hy-form-col">
                  <p className="hy-money">{item.p_price}</p>
                </div>
              </div>
              <div className="form-row hy-form-row justify-content-between">
                <div className="form-col hy-form-col">
                  <p>數量</p>
                </div>
                <div className="form-col hy-form-col">
                  <i className="fas fa-minus k-left-icon hy-left-icon">
                    {/* <MdRemove
            onClick={() => {
              decreaseQty(item.p_sid)
            }}
          /> */}
                  </i>
                  <span className="k-number">{item.quantity}</span>
                  <i className="fas fa-plus k-right-icon hy-right-icon">
                    {/* <MdAdd
            onClick={() => {
              increaseQty(item.p_sid)
            }}
          /> */}
                  </i>
                </div>
              </div>
              <div className="form-row hy-form-row justify-content-between mb-4">
                <div className="form-col hy-form-col">
                  <p>小計</p>
                </div>
                <div className="form-col hy-form-col">
                  <p className="hy-money">{+item.quantity * +item.p_price}</p>
                </div>
              </div>
            </div>
          </>
        )
      })}

      <div className="d-md-none d-block"></div>
      {/* M-商品清單結束 */}
      {/* 中間的裝飾線 */}
      <div className="d-md-none d-block hy-form-border">
        <div className="form-row hy-form-row justify-content-between">
          <div className="col"></div>
        </div>
      </div>
      {/* 中間的裝飾線 */}
      {/* M-商品清單小計開始 */}

      <div className="d-md-none d-block mt-3">
        <div className="form-row hy-form-row justify-content-between">
          <div className="form-col hy-form-col">
            <p>購物清單小計</p>
          </div>
          <div className="form-col hy-form-col">
            <p className="hy-money">{orders1[0].amount}</p>
          </div>
        </div>
      </div>
    </form>
  </div>
  <div className="col-1"></div>
</div>
{
  /* cart1content1  */
}
