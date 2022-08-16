import './App.css';

function App() {
  return (
    <div className="mainAppDiv">
      <div className="container">
        <div className="header">
          <div className="skyBox">Header</div>
        </div>
        <div className="main">
          <div className="mainRow">
            <div className="sideContent">
              <div className="lilacBox">Hero</div>
              <div className="mossBox">Sidebar</div>
            </div>
            <div className="mainContent">
              <div className="canaryBox">Main Content</div>
              <div className="carbonBox">Extra Content</div>
            </div>
          </div>
          <div className="relatedRow">
            <div className="forestBox">Related Images</div>
            <div className="roseBox">Related Posts</div>
          </div>
        </div>
        <div className="footer">
          <div className="orangeBox">Footer</div>
        </div>
      </div>
    </div>
  );
}

export default App;
