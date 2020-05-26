const React = require('react');
const Layout = require('./components/Layout.jsx')
class GoalPeriod extends React.Component {
  render() {
    const logout = (<form action="/sessions/?_method=delete" method="post">
          <input className="btn btn-outline-dark" type="submit" value="Logout"/>
      </form>)
    return (
        <Layout>
       <div id='index'>
       <div className="header" >
            <h1 className="index-title">Goals Tracker</h1>
            <div className= "user-logout">
            <h4 className="user">{this.props.username}</h4>
            <div className='logout'>
            {this.props.username? logout: ''}
            </div>
            </div>
            </div>
            <nav className="nav">
                <a className= "nav-link" href= "/goals/new"> Add New Goal</a>
                <br/>
                <a className= "nav-link" href= "/goals/"> Back</a>
            
            </nav>
            
            <div className= "list-group">
                {
                   this.props.goals.map((goal, i) => {
                    return (
                        <div className= "goal-list">
                          <a href={`/goals/${goal._id}`} className="list-group-item list-group-item-action">
                          <div class="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{goal.timeframe}/{goal.name} {goal.isGoalReached ? <span class="badge badge-success">goal reached</span> : <span class="badge badge-secondary">in-progress</span> }</h5>
                            
                            <small> <form action ={`/goals/${goal._id}?_method=DELETE`} method ="post">
                                    <input className="btn btn-danger" type="submit" value="delete"/>
                                  </form></small>
                          </div>
                          <p className="mb-1 goal-info">{goal.goal}</p>
                          
                        </a>
                        <br></br>
                        </div>
                        )
                    })
                }
           </div>
           </div>
        </Layout> );
  }
}

module.exports = GoalPeriod;