import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Users from './Users';
import User from './User';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<User />, div);
});

// describe('Users', () => {
//   describe('componentDidMount', async () => {
//     window.fetch = jest.fn().mockImplementation(() => ({
//       status: 200,
//       json: () => new Promise((resolve, reject) => {
//         resolve({
//           users: [
//             {
//               name: 'name1',
//               email: 'email1'
//             },
//             {
//               name: 'name2',
//               email: 'email2'
//             }
//           ]
//         })
//       })
//     }))

//     const renderedComponent = await shallow(<Users />)
//     await renderedComponent.update()
//     expect(renderedComponent.state('users').length).toEqual(2)
//   })
// })



// let windowFetchSpy;

// function wait(milliseconds){
//   return new Promise(resolve => {
//       setTimeout(resolve, milliseconds);
//   });
// }

// const users = [
//   {
//     name: 'Bob Belcher',
//     email: 'bob@bobsburgers.com'
//   },
//   {
//     name: 'Linda Belcher',
//     emails: 'linda@bobsburgers.com'
//   }
// ]

// let mockUsersResp = async () => {
//   await wait(10);
//   return {
//     ok: true,
//     status: 200,
//     json: async () => users,
//   };
// }

// beforeEach(() => {
//   windowFetchSpy = jest.spyOn(window, 'fetch').mockImplementation(mockUsersResp);
// })

// afterEach(() => {
//   jest.restoreAllMocks();
// });

// test('Should return a list of user names and emails', async () => {
//   render (<Users />);
//   const usersList = await screen.getByText('Name');
//   expect(usersList).toBeInTheDocument();
// })






