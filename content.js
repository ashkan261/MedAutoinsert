browser.runtime.onMessage.addListener((message) => {
  if (message.action === "fillForm") {
    function fillPage1() {
      if (document.getElementById("AppointmentName")) {
        document.getElementById("AppointmentName").value = "ali";
        document.getElementById("AppointmentLastName").value = "alizade";
        document.getElementById("AppointmentBirthplaceCity").value = "tehran";
        document.getElementById("AppointmentPassportNumber").value = "F45895620";
        document.getElementById("AppointmentCaseNumber").value = "2025AS00003222";

        let sexDropdown = document.getElementById("AppointmentSex");
        if (sexDropdown) sexDropdown.value = "male";

        let countryDropdown = document.getElementById("AppointmentBirthplaceCountryId");
        if (countryDropdown) {
          for (let option of countryDropdown.options) {
            if (option.text.toLowerCase() === "iran") {
              countryDropdown.value = option.value;
              break;
            }
          }
        }

        let passportCountryDropdown = document.getElementById("AppointmentPassportIssuingCountryId");
        if (passportCountryDropdown) {
          for (let option of passportCountryDropdown.options) {
            if (option.text.toLowerCase() === "iran") {
              passportCountryDropdown.value = option.value;
              break;
            }
          }
        }

        let categoryDropdown = document.getElementById("AppointmentApplicantCategory");
        if (categoryDropdown) {
          for (let option of categoryDropdown.options) {
            if (option.text.toLowerCase() === "immigrant") {
              categoryDropdown.value = option.value;
              break;
            }
          }
        }

        let dobField = document.getElementById("AppointmentDateOfBirth");
        if (dobField) dobField.value = "02/28/1985";

        let interviewField = document.getElementById("AppointmentInterviewDateTime");
        if (interviewField) {
          interviewField.value = "04/18/2025 07:35";
        } else {
          let interviewByName = document.querySelector("input[name='data[Appointment][interview_date_time]']");
          if (interviewByName) interviewByName.value = "04/18/2025 07:35";
        }

        triggerEvents();
      }
    }

    function fillPage2() {
      if (document.getElementById("AppointmentEmail")) {
        document.getElementById("AppointmentEmail").value = "ali.alizade3433@gmail.com";
        document.getElementById("AppointmentPhoneNumber").value = "00989128885220";
        document.getElementById("AppointmentPresentAddressOfResidence").value = "1st No16, Ahadi Alley, Golha St, Maziar SQ";
        document.getElementById("AppointmentPresentCityOfResidence").value = "tehran";
        document.getElementById("AppointmentPresentProvinceOfResidence").value = "tehran";
        document.getElementById("AppointmentPresentPostalCodeOfResidence").value = "3383313355";
        document.getElementById("AppointmentIntendedUsAddress").value = "12586 RodRowdrive";
        document.getElementById("AppointmentIntendedUsCity").value = "Los Angeles";
        document.getElementById("AppointmentIntendedUsPostalCode").value = "13204";

        let presentCountryDropdown = document.getElementById("AppointmentPresentCountryId");
        if (presentCountryDropdown) {
          for (let option of presentCountryDropdown.options) {
            if (option.text.toLowerCase() === "iran") {
              presentCountryDropdown.value = option.value;
              break;
            }
          }
        }

        let stateDropdown = document.getElementById("AppointmentIntendedUsStateId");
        if (stateDropdown) {
          for (let option of stateDropdown.options) {
            if (option.text.toLowerCase() === "california") {
              stateDropdown.value = option.value;
              break;
            }
          }
        }

        triggerEvents();
      }
    }

    function fillPage3() {
      if (document.getElementById("AppointmentCeacBarcode")) {
        document.getElementById("AppointmentCeacBarcode").value = "FRTGTGYHJU";

        let priorCountryDropdown = document.getElementById("AppointmentPriorCountryId");
        if (priorCountryDropdown) {
          for (let option of priorCountryDropdown.options) {
            if (option.text.toLowerCase() === "iran") {
              priorCountryDropdown.value = option.value;
              break;
            }
          }
        }

        triggerEvents();
      }
    }

    function triggerEvents() {
      document.querySelectorAll("input, select").forEach((element) => {
        element.dispatchEvent(new Event("input"));
        element.dispatchEvent(new Event("change"));
      });
    }

    fillPage1();
    fillPage2();
    fillPage3();
  }
});