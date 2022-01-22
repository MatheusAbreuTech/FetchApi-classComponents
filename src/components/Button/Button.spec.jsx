import { fireEvent, render, screen } from '@testing-library/react';
import Button from '.';

describe('<Button />', () => {
  it('should render the button with the text "Load more" ', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} onClick={fn} />); //renderizando o botao

    const button = screen.getByRole('button', { name: /load more/i }); //referenciando o botao atraves do name, ou seja, pegando a prop text no button
    expect(button).toBeInTheDocument(); //está esperando que haja um botao no documento, ou seja, se ele renderizou na tela
  });

  it('should call function on button click', () => {
    const fn = jest.fn(); //criando uma funcao sem nada, apenas para teste. Isso se chama mock function
    render(<Button text="Load more" onClick={fn} />); //renderizando o botao e passando um evento onClick com a funcao criada para ver se esta chamando ela quando clicar no botao

    const button = screen.getByRole('button', { name: /load more/i });

    fireEvent.click(button); //efetuando um evento de click no botao

    expect(fn).toHaveBeenCalledTimes(1); //esperando que chame a funcao quando clicada uma vez
  });

  it('should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={true} onClick={fn} />); //renderizando o botao

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeDisabled(); //esperando que a opcao disabled seja verdadeira
  });

  it('should be disabled when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} onClick={fn} />); //renderizando o botao

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeEnabled(); //esperando que a opcao disabled seja falsa
  });

  it('should math snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="Load more" disabled={false} onClick={fn} />); //renderizando o botao

    expect(container.firstChild).toMatchSnapshot(); //criando um snapshot do elemento atual e salvando em uma pasta
  });
});
