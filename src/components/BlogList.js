import "./BlogList.css"


class BlogList extends Component{
    State = bloglistdata
    this.setState(bloglistdata=getBlogDetail())

    componentDidMount(){
        getBlogDetail()
    }

    let getBlogDetail= async()=>{
        const url = "https://jsonplaceholder.typicode.com/posts"
        const options = {
            method:"GET"
        }
        const response = await fetch(url,options)
        const data = await response.json()
    }
    render(){
        return(
            <div className="blog_list">
               blogListData.map((list)=>{
                    <h1>{List.title}</h1>
                    <p value="key">{List.id}</p>
                    <p>{List.description}</p>
               })
            </div>
        )
    }
}

export default BlogList