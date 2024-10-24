from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException, ElementClickInterceptedException, TimeoutException 
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver import Chrome
import logging
import time
 
# Configurazione delogger
logging.basicConfig(level=logging.INFO)
 
# Percorso del driver di Chrome specifico
chrome_driver_path = r"C:\Users\drago\Desktop\Tutto-Selenium\chromedriver-win64\chromedriver-win64\chromedriver.exe"
 
# Inizializzo il servizio con il percorso specifico del driver di Chrome
service = Service(chrome_driver_path)
 
# Inizializzo le opzioni del browser Chrome
options = Options()
 
# DIRECTORY DI DESTINAZIONE DEI FILE
PATH = r"C:\Users\drago\Desktop\Tutto-Selenium\Prima-Prova"
 
options.add_experimental_option("prefs", {
    "download.default_directory": PATH,
    "directory_upgrade": True,
    "profile.default_content_settings.popups": 0,
    "plugins.always_open_pdf_externally": True,
    "safebrowsing.enabled": True  # Abilita il safe browsing per evitare problemi con i download
})
 
# Avvio del driver di Chrome
driver = Chrome(service=service, options=options)

# Entro nella pagina web

driver.get("https://www.arpalazio.it/")

# Impostazione di un tempo di attesa per il caricamento della pagina
driver.implicitly_wait(10)

# Bottone per accettare i cookies
 
def accetta_cookie(driver):
    try:
        # Attendi che l'elemento sia presente e cliccabile
        WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, "button.acceptcookies"))
        ).click()
        logging.info("Cookie accettati con successo.")
    except NoSuchElementException:
        logging.error("Il bottone per accettare i cookie non è stato trovato.")
    except ElementClickInterceptedException:
        logging.error("Il click sul bottone dei cookie è stato bloccato.")
    except Exception as e:
        logging.error(f"Errore imprevisto: {str(e)}")


# Funzione per cliccare sul bottone "Servizi"
def clicca_bottone_servizi(driver):
    try:
        # Trova il bottone "Ambiente"
        button = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, 'button#Servizi'))
        )

        # Forza il click con JavaScript
        driver.execute_script("arguments[0].click();", button)
        logging.info("Bottone 'Servizi' cliccato con successo.")
    except NoSuchElementException:
        logging.error("Il bottone 'Servizi' non è stato trovato.")
    except Exception as e:
        logging.error(f"Errore imprevisto: {str(e)}")


# Funzione per cliccare sul link "Tariffario"
def clicca_link_tariffario(driver):
    try:
        # Attendi che il link "tariffario" sia visibile
        link = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, 'a[aria-label="Tariffario"]'))
        )

        # Clicca sul link
        link.click()
        logging.info("Link 'Tariffario' cliccato con successo.")
        # Attendi che la nuova pagina si carichi e accetta i cookie
        WebDriverWait(driver, 10).until(EC.title_contains("Tariffario"))  # Attendere che il titolo della pagina indichi che siamo sulla pagina "Tariffario"
        accetta_cookie(driver)  # Chiamata per accettare nuovamente i cookie
    except NoSuchElementException:
        logging.error("Il link 'Tariffario' non è stato trovato.")
    except ElementClickInterceptedException:
        logging.error("Il click sul link 'Tariffario' è stato bloccato.")
    except Exception as e:
        logging.error(f"Errore imprevisto: {str(e)}")


# Funzione per cliccare i link della pagina tariffario

def scarica_tutti_i_documenti(driver):

    try: 

        document_links = driver.find_elements(By.CSS_SELECTOR, 'a[href$=".pdf"]')

        if not document_links: 
            logging.info("Nessun documento trovato nella pagina.")
            return
        
        logging.info(f"Trovati {len(document_links)} documenti. Avvio donload...")

        for link in document_links:

            document_url = link.get_attribute('href')
            driver.execute_script("window.open(argument[0]);", document_url)
            logging.info(f"Documento scaricato da: {document_url}")
            time.sleep(2)

        logging.info("Download completato.")

    except Exception as e:
        logging.error(f"Errore durante il download dei documenti: {str(e)}")


accetta_cookie(driver)
clicca_bottone_servizi(driver)
clicca_link_tariffario(driver)
scarica_tutti_i_documenti(driver)
driver.quit()