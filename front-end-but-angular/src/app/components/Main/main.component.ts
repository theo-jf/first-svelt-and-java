import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'new-main',
  templateUrl: './main.component.html',
  styleUrls: []
})
export class MainComponent {
  title = 'myMain';

  // UseEffect knock-off
  set foo(rocks: number) {
    // Do something here
  }


  response = 'Press the button!';
  addRock = async () => {
      new Audio('./l-e5pazuT1o_48.mp3').play();
    try {
      let addMessage = await axios.post('api/server/add');
      console.log(addMessage.data);
      fetchRocks();
    } catch (error) {
      console.log(error);
    }
  };
  rocks = 0;
  fetchRocks = async (rocks: number, response: string): Promise<null> => {
    try {
      let serverResponse = await axios.get('api/server/fetch');
      rocks = serverResponse.data;
      response = `${rocks} rocks`;
    } catch (error) {
      console.log(error);
      response = `The server doesn't appear to be connected ...`;
    }
    return null;
  };
}