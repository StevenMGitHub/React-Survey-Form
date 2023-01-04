import React from 'react'

function Formulario() {
  return (
    <>
      <div class="container">
                <form id="survey-form">
                            <div className="form-group">
                                <label id="name-label" form="name">Name</label>
                                <input id="name" className="form-control" type="text" name="name" placeholder="enter your name" required=""></input>
                            </div>

                            <div className="form-group">
                                <label id="email-label" form="email">Email</label>
                                <input id="email" className="form-control" type="email" name="email" placeholder="enter your email" required=""></input>
                            </div>

                            <div className="form-group">
                                <label id="number-label" form="number">Age<span>(optional)</span></label>               
                                <input id="number" className="form-control" type="number" name="age" min="10" max="99" placeholder="Age"></input>
                            </div>

                            <div className="form-group">
                                <p>Which option best describes your current role?</p>
                                <select id="dropdown" className="form-control" name="role" required="">
                                    <option disabled="" selected="" value="">Select current role</option>
                                    <option value="student">Student</option>
                                    <option value="job">Full time jog</option>
                                    <option value="learner">Full time learner</option>
                                    <option value="preferNo">Prefer not to say</option>
                                    <option value="other">other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <p>Would you recommend freeCodeCamp to a friend?</p>
                                <label for="">
                                    <input className="input-radio" name="user-recommed" value="definitely" type="radio"></input>
                                    Definitely
                                </label>
                                <label for="">
                                    <input className="input-radio" name="user-recommed" value="maybe" type="radio"></input>
                                    Maybe
                                </label>
                                <label for="">
                                    <input className="input-radio" name="user-recommed" value="not-sure" type="radio"></input>
                                    Not sure
                                </label>
                            </div>

                            <div className="form-group">
                                <p>What is your favorite feature of freeCodeCamp?</p>
                            <select id="most-like" className="form-control" name="mostLike" required="">
                                <option disabled="" selected="" value="">Select an option</option>
                                <option value="challenges">Challenges</option>
                                <option value="projects">Projects</option>
                                <option value="community">Community</option>
                                <option value="openSource">Open source</option>
                            </select>
                            </div>


                            <div className="form-group">
                                <p>What would you like to see improved? <span className="clue">(Check all that apply)</span></p>

                            <label for="">
                                <input className="input-checkbox" name="prefer" value="definitely" type="checkbox"></input>
                                Front-end Projects
                            </label>
                            <label for="">
                                <input className="input-checkbox" name="prefer" value="back-end-projects" type="checkbox"></input>
                                Back-end Projects
                            </label>
                            <label for="">
                                <input className="input-checkbox" name="prefer" value="data-visualization" type="checkbox"></input>
                                Data Visualization
                            </label>
                            <label for="">
                                <input className="input-checkbox" name="prefer" value="challenges" type="checkbox"></input>
                                Challenges
                            </label>
                            <label for="">
                                <input className="input-checkbox" name="prefer" value="open-source-community" type="checkbox"></input>
                                Open Source Community
                            </label>
                            <label for="">
                                <input className="input-checkbox" name="prefer" value="gitter-help-rooms" type="checkbox"></input>
                                Gitter help rooms
                            </label>
                            <label for="">
                                <input className="input-checkbox" name="prefer" value="videos" type="checkbox"></input>
                                Videos
                            </label>
                            <label for="">
                                <input className="input-checkbox" name="prefer" value="city-meetups" type="checkbox"></input>
                                City Meetups
                            </label>
                            <label for="">
                                <input className="input-checkbox" name="prefer" value="wiki" type="checkbox"></input>
                                Wiki
                            </label>
                            <label for="">
                                <input className="input-checkbox" name="prefer" value="forum" type="checkbox"></input>
                                Forum
                            </label>
                            <label for="">
                                <input className="input-checkbox" name="prefer" value="additional class" type="checkbox"></input>
                                Additional Courses
                            </label>
                            </div>


                            <div className="form-group">
                                <p>Any comments or suggestions?</p>
                                <textarea name="comment" id="comments" className="input-textarea" cols="150" rows="10" placeholder="Enter your comment here"></textarea>
                            </div>

                            <div className="form-group">                       
                                <button id="submit" className="submit-button" type="submit">Submit</button>
                            </div>
                </form>
       </div>
    </>
  )
}

export default Formulario;
