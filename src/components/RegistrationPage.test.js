import {render, screen, fireEvent, getByTestId} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils';
import { RegistrationPage } from './RegistrationPage'

//unit test 1 : Check is submit button is disabled initially
test('on initial render, the submit button is disabled', () => {
    render (<RegistrationPage/>);
    expect(screen.getByRole('button', { name: /Submit/i})).toBeDisabled();
})

//unit test 2 : Check is submit button is disabled on invalid input of first name
test('if first name is empty or less than 5 characters, the submit button is disabled', async() => {
    render (<RegistrationPage/>);
    act(() => {
        userEvent.type(screen.getByRole('textbox', { name: /Fisrt Name/i}), "ada")
        expect (screen.getByRole('button', { name: /Submit/i})).toBeDisabled();
      });
    
})

//unit test 3 : Check is submit button is disabled on invalid input of last name
test('if last name is empty or less than 5 characters, the submit button is disabled', async() => {
    render (<RegistrationPage/>);
    act(() => {
        userEvent.type(screen.getByRole('textbox', { name: /Last Name/i}), "ada")
        expect (screen.getByRole('button', { name: /Submit/i})).toBeDisabled();
      });
    
})

//unit test 4 : Check is submit button is disabled on invalid input of phone mumber
test('if phone number is empty or not a number, the submit button is disabled', async() => {
    render (<RegistrationPage/>);
    act(() => {
        userEvent.type(screen.getByRole('textbox', { name: /Phone Number/i}), "egg")
        expect (screen.getByRole('button', { name: /Submit/i})).toBeDisabled();
      });
    
})

//unit test 5 : Check is submit button is disabled on invalid input of country
test('country is empty , the submit button is disabled', async() => {
    
    render (<RegistrationPage/>);
    act(() => {
        const contentInput = screen.getByTestId("select-input");
        fireEvent.change(contentInput, {
            target: { value: "" },
          })
       
        expect (screen.getByRole('button', { name: /Submit/i})).toBeDisabled();
      });
    
})

//unit test 6 : Check is submit button is enabled on correct input of all the fields
test('if all fields are correct , the submit button is enabled', () => {
    
    render (<RegistrationPage/>);
    act(async () => {
        const contentInput = screen.getByTestId("select-input");
        fireEvent.change(contentInput, {
            target: { value: "India" },
        })
        userEvent.type(screen.getByRole('textbox', { name: /Fisrt Name/i}), "ada")
        userEvent.type(screen.getByRole('textbox', { name: /Last Name/i}), "ada")
        userEvent.type(screen.getByRole('textbox', { name: /Phone Number/i}), 994735896)
        expect (await screen.getByRole('button', { name: /Submit/i})).toBeEnabled();
      });
    
})