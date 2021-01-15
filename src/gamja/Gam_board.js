import React, { Component } from 'react';


class Gam_board extends Component {
	state = {
		name:'',
		email:'',
		subject:'',
		comment:''
	}
	
	handleChange = (e) => {
		const {name, value} = e.target;
		this.setState({
			[name]:value
		})


	}
    render() {

	
        return (
             <>
            
                <div className="gam_text">
                <h1>감자 게시판</h1>
                <h2>Leave a Comment</h2>
                </div>
                <div className="gam_board">
                <form action="/about/addComment" method="POST">
			<div class="well">
				<div class="row">
					<div class="col-md-6">
						<input type="text" class="form-control" placeholder="Name" 
						id="authorName" name="authorName" onChange={this.handleChange}/>
						<br />
					</div>
					<div class="col-md-6">

						<input type="email" class="form-control" placeholder="Email" name="authorEmail" />
						<br />
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<input type="text" class="form-control" placeholder="Subject" name="subject" />
						<br />
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<textarea class="form-control" rows="8" placeholder="Comment" name="commentText"></textarea>
						<br />
					</div>
				</div>
				<div class="row">
					<div class="col-md-2 col-md-offset-10">
						<button type="submit" class="btn btn-primary form-control">Comment</button>
					</div>
				</div>
			</div>
		</form>
            </div>
            </>
        );
        }
}

export default Gam_board;