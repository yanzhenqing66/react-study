

function Tab({ tab }) {
  if (tab) {
    return (
      <div className="tab-first-wrap">
        <div className="outer">
          <div className="inner"></div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="tab-second-wrap">
        <div className="outer"></div>
        <div className="inner">hello</div>
      </div>
    )
  }
}

export default Tab