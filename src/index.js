import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import Card from './Card'
const App = ()=>
{
    return (
        <div className = "ui container comments">
                    <div class="ui comments">
                        <Card>
                            <div>
                                <h1>Warning!!!</h1>
                            Are You sure want to do this?
                            </div>
                            </Card>
                        <Card>
                        <CommentDetail author = "Aakash" time = "today at 4:45PM" comment = "Hello" imgsrc = {faker.image.avatar()}/>

                        </Card>
                        <Card>
                        <CommentDetail author = "Sanjay" time = "yesterday at 6:45PM" comment = "Bello" imgsrc = {faker.image.avatar()}/>


                        </Card>
                        <Card>
                        <CommentDetail author = "Mahesh" time = "today at 3:45PM" comment = "Mello" imgsrc = {faker.image.avatar()}/>

                        </Card>

                             
                           
            </div>
        </div>
        
    )
}

ReactDOM.render(<App/>,document.querySelector('#test'))
