import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atividade3',
  imports: [FormsModule],
  templateUrl: './atividade3.html',
  styleUrl: './atividade3.scss',
})
export class Atividade3 {
  temperatura = signal<number | null>(null); 
  opcao = signal<string>(''); 

  CalcularTemperatura(): void {
    const receberTemperatura = this.temperatura();
    const escolherOpcao = this.opcao();

    if (receberTemperatura === null) {
      alert('Digite uma temperatura válida!');
      return;
    }

    if (!escolherOpcao) {
      alert('Selecione uma opção de conversão!');
      return;
    }

    let calculo: number;

    if (escolherOpcao === 'celsiusToFahrenheit') {
      calculo = (receberTemperatura * 9) / 5 + 32;
      alert(`${receberTemperatura} °C = ${calculo.toFixed(2)} °F`);
    } else if (escolherOpcao === 'fahrenheitToCelsius') {
      calculo = (receberTemperatura - 32) * 5 / 9;
      alert(`${receberTemperatura} °F = ${calculo.toFixed(2)} °C`);
    }
  }
}
