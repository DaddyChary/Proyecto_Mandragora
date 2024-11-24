import random
import time
import requests

URL = "http://localhost:2000/"  # Ruta en tu servidor Node.js

def generar_datos():
    while True:
        # Generar datos simulados
        humedad = random.uniform(30, 70)  # Humedad entre 30% y 70%
        temperatura = random.uniform(15, 35)  # Temperatura entre 15°C y 35°C

        # Enviar los datos al servidor Node.js
        payload = {"humedad": humedad, "temperatura": temperatura}
        try:
            response = requests.post(URL, json=payload)
            print(f"Datos enviados: {payload}, Respuesta: {response.status_code}")
        except Exception as e:
            print(f"Error al enviar los datos: {e}")

        # Esperar 5 segundos antes de enviar los próximos datos
        time.sleep(5)

if __name__ == "__main__":
    generar_datos()
