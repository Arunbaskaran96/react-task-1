// import logo from './logo.svg';
import './App.css';
import Card from './Card'
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const items=[
    {
      plan:"FREE",
      dollar:"0",
      present:[
        {
          title:"Single User"
        },
        {
          title:"5GB Storage"
        },
        {
          title:"Unlimited Public Projects"
        },
        {
          title:"Community Access"
        },
        {
          title:"Unlimited Private Projects",
          weight:true
        },
        {
          title:"Dedicated Phone Support",
          weight:true
        },
        {
          title:"Free Subdomain",
          weight:true
        },
        {
          title:"Monthly Status Reports",
          weight:true
        }

      ]
    },
    {
      plan:"PLUS",
      dollar:"9",
 
      present:[
        {
          title:"5 User",
          highlight:true
        },
        {
          title:"50GB Storage"
        },
        {
          title:"Unlimited Public Projects"
        },
        {
          title:"Community Access"
        },
        {
          title:"Unlimited Private Projects"
        },
        {
          title:"Dedicated Phone Support"
        },
        {
          title:"Free Subdomain"
        },
        {
          title:"Monthly Status Reports",
          weight:true
        }
      ]
    },
    {
      plan:"PRO",
      dollar:"49",
      present:[
        {
          title:"unlimited User",
          highlight:true,
        },
        {
          title:"150GB Storage"
        },
        {
          title:"Unlimited Public Projects"
        },
        {
          title:"Community Access"
        },
        {
          title:"Unlimited Private Projects"
        },
        {
          title:"Dedicated Phone Support"
        },
        {
          title:"Unlimited Free Subdomain"
        },
        {
          title:"Monthly status report"
        }
      ]
    }
    
  ]
  return (
      <div className='container'>
        <div className='row'>
          {items.map((card)=>{
            return(
              <Card card={card}/>
            )
          })}
        </div>
      </div>
  );
}






export default App;
