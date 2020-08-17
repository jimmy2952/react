import React, { Component} from 'react';
import './App.css';

class App extends Component {
    render () {
        return (
            <div className="App">
                <form>
                    <div>
                        姓名<input name="name" type="text" />
                    </div>
                    <div>
                        地址<input name="address" type="text" />
                    </div>
                    <div>
                        心得<textarea name="review" />
                    </div>
                    <div>
                        性別
                        <input id="gender_male" name="gender" type="radio" value="male" />
                        <label for="gender_male">男</label>
                        <input id="gender_female" name="gender" type="radio" value="female" />
                        <label for="gender_female">女</label>
                        <input id="gender_other" name="gender" type="radio" value="other" />
                        <label for="gender_other">其他</label>
                    </div>
                    <div>
                        是否吃素<input type="checkbox" value="yes" name="is_veg"/>
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        )
    }
} 

export default App