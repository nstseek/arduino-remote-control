# arduino-remote-control
This project controls an Arduino connected via USB using RS232 communication through the network, using an node/express server.
A single route in the API receives a query parameter that contains a value, this value will be written in a default PWM port connected to the Arduino.
This project was created to control a LED using hardware Pulse Width Modulation (PWM). Arduino has a few ports that can use PWM.

## PWM
Pulse Width Modulation is a strategy that tries to manipulate the average power creating a clock in the output port that has a dynamic duty cycle.
This duty cycle can be from 0 to 255 in Arduino, with 0 being 0% and 255 being 100%.
The usual frequency for PWM outputs in Arduino is 480Hz, enough for the human eye to not see the LED blinking but instead see a weaker/stronger continuous light.
