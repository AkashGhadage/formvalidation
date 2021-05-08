
$(document).ready(function () {
    //validation part

    // Elements
    var email_Element = $("#Email");
    var Status_Element = $("#Status");
    var Countries_Element = $("#Country");
    var Number_Element = $("#Number");
    var State_Element = $("#State");
    var City_Element = $("#City");
    var Source_Element = $("#Source");
    var Entry_Element = $("input[id='Entry']");
    var Checkbox_Element = $("input[type='checkbox']");
    var Interest_Element = $("input[id='Interest']");
    var FormElement = $("#Form");



    //flags
    var Email_Flag = false;
    var Status_Flag = false;
    var Countries_Flag = false;
    var Number_Flag = false;
    var State_Flag = false;
    var City_Flag = false;
    var Source_Flag = false;
    var Entry_Flag = false;
    // chkbox
    var communicationMode_Flag = false;

    var Interest_Flag = false;


    //Events
    // we call function that do validation and set value to flag element
    email_Element.keyup(function () {
        Validate_Email();
    });

    Status_Element.change(function () {
        Validate_Status();
    });

    Countries_Element.change(function () {
        Validate_Countries();
    });

    Number_Element.keyup(function () {
        Validate_Number();

    });

    State_Element.change(function () {
        Validate_State();
    });

    City_Element.change(function () {
        Validate_City();
    });

    Source_Element.change(function () {
        Validate_Source();
    });

    Entry_Element.change(function () {
        Validate_Entry();
    });

    Checkbox_Element.change(function () {
        Validate_CommunicationMode();
    });

    Interest_Element.change(function () {
        Validate_Interest();
    });


    // validation Functions
    function Validate_Email() {
        var Email = email_Element.val();

        var EmailPattern = new RegExp(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);

        if (Email == "" || Email == undefined) {
            $("#EmailValidation").text("* Email Field is required");
            email_Element.addClass("border border-danger");
            email_Element.focus();

        }
        else if (!EmailPattern.test(Email)) {
            $("#EmailValidation").text("Please Enter valid Email Address");
            email_Element.addClass("border border-danger");

        }
        else {
            $("#EmailValidation").text(" ");
            email_Element.removeClass("border border-danger")
            Email_Flag = true;
        }
    }

    function Validate_Status() {
        var status = Status_Element.val();
        var selectedIndex = Status_Element[0].selectedIndex;

        if (status == " " || selectedIndex == 0) {
            $("#StatusValidation").text("* Field is required");
            Status_Element.addClass("border border-danger");
            Status_Element.focus();
        }
        else {
            $("#StatusValidation").text(" ");
            Status_Element.removeClass("border border-danger")
            Status_Flag = true;
        }
    }

    function Validate_Countries() {
        var Country = Countries_Element.val();
        var selectedIndex = Countries_Element[0].selectedIndex;

        if (Country == "Select" || selectedIndex == 0) {
            $("#CountriesValidation").text("* Field is required");
            Countries_Element.addClass("border border-danger");
            Countries_Element.focus();
        }
        else {
            $("#CountriesValidation").text(" ");
            Countries_Element.removeClass("border border-danger")
            Countries_Flag = true;
        }
    }

    function Validate_Number() {
        var Number = Number_Element.val();
        var NumberPattern = new RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/); // /^((\+)?(\d{2}[-]))?(\d{10}){1}?$/

        if (Number == "" || Number == undefined) {
            $("#NumberValidation").text("* Number Field is required");
            Number_Element.addClass("border border-danger");
            Number_Element.focus();
        }
        else if (!NumberPattern.test(Number)) {
            $("#NumberValidation").text("* Please Enter valid Number");
            Number_Element.addClass("border border-danger");
        }
        else {
            $("#NumberValidation").text(" ");
            Number_Element.removeClass("border border-danger")
            Number_Flag = true;
        }
    }

    function Validate_State() {
        var State = State_Element.val(); // empty string
        var selectedIndex = State_Element[0].selectedIndex;

        if (State == " " || selectedIndex == 0) {
            $("#StateValidation").text("* Field is required");
            State_Element.addClass("border border-danger");
            State_Element.focus();
        }
        else {
            $("#StateValidation").text(" ");
            State_Element.removeClass("border border-danger")
            State_Flag = true;
        }
    }

    function Validate_City() {
        var City = City_Element.val();
        var selectedIndex = City_Element[0].selectedIndex;

        if (City == " " || selectedIndex == 0) {
            $("#CityValidation").text("* Field is required");
            City_Element.addClass("border border-danger");
            City_Element.focus();
        }
        else {
            $("#CityValidation").text(" ");
            City_Element.removeClass("border border-danger")
            City_Flag = true;
        }
    }

    function Validate_Source() {
        var Source = Source_Element.val();
        var selectedIndex = Source_Element[0].selectedIndex;

        if (Source == " " || selectedIndex == 0) {
            $("#SourceValidation").text("* Field is required");
            Source_Element.addClass("border border-danger");
            Source_Element.focus();
        }
        else {
            $("#SourceValidation").text(" ");
            Source_Element.removeClass("border border-danger")
            Source_Flag = true;
        }
    }

    function Validate_Entry() {
        var Checked_Entry = $("input[name='Entry']:checked");

        if (Checked_Entry.length == 0) {
            $("#EntryValidation").text("* Field is required");
        }
        else {
            $("#EntryValidation").text(" ");
            Entry_Flag = true;
        }
    }

    //Check box validation
    function Validate_CommunicationMode() {

        var checked_CheckBoxes = $("input[type='checkbox']:checked");

        if (checked_CheckBoxes.length == 0) {
            $("#Communication_Mode_Validation").text("* Field is required");
            Checkbox_Element.addClass("border border-danger");
            Checkbox_Element.focus();
        }
        else {
            $("#Communication_Mode_Validation").text(" ");
            Checkbox_Element.removeClass("border border-danger")
            communicationMode_Flag = true;
        }
    }

    function Validate_Interest() {
        var Interest = $("input[name='Interest']:checked");

        if (Interest.length == 0) {
            $("#InterestValidation").text("* Field is required");
        }
        else {
            $("#InterestValidation").text(" ");
            Interest_Flag = true;
        }
    }

    //form submit event
    FormElement.submit(
        function () {
            Email_Flag = Status_Flag = Countries_Flag = Number_Flag = State_Flag = City_Flag = Source_Flag = Entry_Flag = communicationMode_Flag = Interest_Flag = false;

            Validate_CommunicationMode();
            Validate_Interest();
            Validate_Entry();
            Validate_Source();
            Validate_City();
            Validate_State();
            Validate_Number();
            Validate_Countries();
            Validate_Status();
            Validate_Email();

            if (Email_Flag == true && Status_Flag == true && Countries_Flag == true && Number_Flag == true && State_Flag == true && City_Flag == true && Source_Flag == true && Entry_Flag == true && Interest_Flag == true && communicationMode_Flag == true) {
                alert("Thank You..!You are Connnected With Us");              
                return true;
            }
            else {
                return false;
            }
        }
    );
});
