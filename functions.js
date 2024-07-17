function numbers_F(variant_sel_F, corp_phone, corp_fax, corp_mobile, corp_email) {
    var numbers;



    if (variant_sel_F == "" && corp_phone != "" && corp_fax != "" && corp_mobile != "" && corp_email != "") {
        numbers = corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + corp_fax + "\n" + corp_mobile + "&nbsp;&nbsp;|&nbsp;&nbsp;" + corp_email;
    }
    if (variant_sel_F == "" && corp_phone != "" && corp_fax != "" && corp_mobile != "" && corp_email == "") {
        numbers = corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + corp_fax + "\n" + corp_mobile;
    }
    if (variant_sel_F == "" && corp_phone != "" && corp_fax != "" && corp_mobile == "" && corp_email != "") {
        numbers = corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + corp_fax + "\n" + corp_email;
    }
    if (variant_sel_F == "" && corp_phone != "" && corp_fax == "" && corp_mobile != "" && corp_email != "") {
        numbers = corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + corp_mobile + "\n" + corp_email;
    }
    if (variant_sel_F == "" && corp_phone == "" && corp_fax != "" && corp_mobile != "" && corp_email != "") {
        numbers = corp_fax + "&nbsp;&nbsp;|&nbsp;&nbsp;" + corp_mobile + "\n" + corp_email;
    }
    if (variant_sel_F == "" && corp_phone != "" && corp_fax != "" && corp_mobile == "" && corp_email == "") {
        numbers = corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + corp_fax;
    }
    if (variant_sel_F == "" && corp_phone != "" && corp_fax == "" && corp_mobile != "" && corp_email == "") {
        numbers = corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + corp_mobile;
    }
    if (variant_sel_F == "" && corp_phone != "" && corp_fax == "" && corp_mobile == "" && corp_email != "") {
        numbers = corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + corp_email;
    }
    if (variant_sel_F == "" && corp_phone == "" && corp_fax != "" && corp_mobile != "" && corp_email == "") {
        numbers = corp_fax + "&nbsp;&nbsp;|&nbsp;&nbsp;" + corp_mobile;
    }
    if (variant_sel_F == "" && corp_phone == "" && corp_fax != "" && corp_mobile == "" && corp_email != "") {
        numbers = corp_fax + "&nbsp;&nbsp;|&nbsp;&nbsp;" + corp_email;
    }
    if (variant_sel_F == "" && corp_phone == "" && corp_fax == "" && corp_mobile != "" && corp_email != "") {
        numbers = corp_mobile + "&nbsp;&nbsp;|&nbsp;&nbsp;" + corp_email;
    }
    if (variant_sel_F == "" && corp_phone != "" && corp_fax == "" && corp_mobile == "" && corp_email == "") {
        numbers = corp_phone;
    }
    if (variant_sel_F == "" && corp_phone == "" && corp_fax != "" && corp_mobile == "" && corp_email == "") {
        numbers = corp_fax;
    }
    if (variant_sel_F == "" && corp_phone == "" && corp_fax == "" && corp_mobile != "" && corp_email == "") {
        numbers = corp_mobile;
    }
    if (variant_sel_F == "" && corp_phone == "" && corp_fax == "" && corp_mobile == "" && corp_email != "") {
        numbers = corp_email;
    }
    if (variant_sel_F == "" && corp_phone == "" && corp_fax == "" && corp_mobile == "" && corp_email == "") {
        numbers = "";
    }
    if (variant_sel_F == "Deutsch" && corp_phone != "" && corp_fax != "" && corp_mobile != "" && corp_email != "") {
        numbers = "Telefon " + corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "Fax " + corp_fax + "\n" + "Mobil " + corp_mobile + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "E-Mail " + corp_email;
    }
    if (variant_sel_F == "Deutsch" && corp_phone != "" && corp_fax != "" && corp_mobile != "" && corp_email == "") {
        numbers = "Telefon " + corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "Fax " + corp_fax + "\n" + "Mobil " + corp_mobile;
    }
    if (variant_sel_F == "Deutsch" && corp_phone != "" && corp_fax != "" && corp_mobile == "" && corp_email != "") {
        numbers = "Telefon " + corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "Fax " + corp_fax + "\n" + "E-Mail " + corp_email;
    }
    if (variant_sel_F == "Deutsch" && corp_phone != "" && corp_fax == "" && corp_mobile != "" && corp_email != "") {
        numbers = "Telefon " + corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "Mobil " + corp_mobile + "\n" + "E-Mail " + corp_email;
    }
    if (variant_sel_F == "Deutsch" && corp_phone == "" && corp_fax != "" && corp_mobile != "" && corp_email != "") {
        numbers = "Fax " + corp_fax + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "Mobil " + corp_mobile + "\n" + "E-Mail " + corp_email;
    }
    if (variant_sel_F == "Deutsch" && corp_phone != "" && corp_fax != "" && corp_mobile == "" && corp_email == "") {
        numbers = "Telefon " + corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "Fax " + corp_fax;
    }
    if (variant_sel_F == "Deutsch" && corp_phone != "" && corp_fax == "" && corp_mobile != "" && corp_email == "") {
        numbers = "Telefon " + corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "Mobil " + corp_mobile;
    }
    if (variant_sel_F == "Deutsch" && corp_phone != "" && corp_fax == "" && corp_mobile == "" && corp_email != "") {
        numbers = "Telefon " + corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "E-Mail " + corp_email;
    }
    if (variant_sel_F == "Deutsch" && corp_phone == "" && corp_fax != "" && corp_mobile != "" && corp_email == "") {
        numbers = "Fax " + corp_fax + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "Mobil " + corp_mobile;
    }
    if (variant_sel_F == "Deutsch" && corp_phone == "" && corp_fax != "" && corp_mobile == "" && corp_email != "") {
        numbers = "Fax " + corp_fax + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "E-Mail " + corp_email;
    }
    if (variant_sel_F == "Deutsch" && corp_phone == "" && corp_fax == "" && corp_mobile != "" && corp_email != "") {
        numbers = "Mobil " + corp_mobile + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "E-Mail " + corp_email;
    }
    if (variant_sel_F == "Deutsch" && corp_phone != "" && corp_fax == "" && corp_mobile == "" && corp_email == "") {
        numbers = "Telefon " + corp_phone;
    }
    if (variant_sel_F == "Deutsch" && corp_phone == "" && corp_fax != "" && corp_mobile == "" && corp_email == "") {
        numbers = "Fax " + corp_fax;
    }
    if (variant_sel_F == "Deutsch" && corp_phone == "" && corp_fax == "" && corp_mobile != "" && corp_email == "") {
        numbers = "Mobil " + corp_mobile;
    }
    if (variant_sel_F == "Deutsch" && corp_phone == "" && corp_fax == "" && corp_mobile == "" && corp_email != "") {
        numbers = "E-Mail " + corp_email;
    }
    if (variant_sel_F == "Deutsch" && corp_phone == "" && corp_fax == "" && corp_mobile == "" && corp_email == "") {
        numbers = "";
    }
    if (variant_sel_F == "Englisch" && corp_phone != "" && corp_fax != "" && corp_mobile != "" && corp_email != "") {
        numbers = "Phone " + corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "Fax " + corp_fax + "\n" + "Mobile " + corp_mobile + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "E-Mail " + corp_email;
    }
    if (variant_sel_F == "Englisch" && corp_phone != "" && corp_fax != "" && corp_mobile != "" && corp_email == "") {
        numbers = "Phone " + corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "Fax " + corp_fax + "\n" + "Mobile " + corp_mobile;
    }
    if (variant_sel_F == "Englisch" && corp_phone != "" && corp_fax != "" && corp_mobile == "" && corp_email != "") {
        numbers = "Phone " + corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "Fax " + corp_fax + "\n" + "E-Mail " + corp_email;
    }
    if (variant_sel_F == "Englisch" && corp_phone != "" && corp_fax == "" && corp_mobile != "" && corp_email != "") {
        numbers = "Phone " + corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "Mobile " + corp_mobile + "\n" + "E-Mail " + corp_email;
    }
    if (variant_sel_F == "Englisch" && corp_phone == "" && corp_fax != "" && corp_mobile != "" && corp_email != "") {
        numbers = "Fax " + corp_fax + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "Mobile " + corp_mobile + "\n" + "E-Mail " + corp_email;
    }
    if (variant_sel_F == "Englisch" && corp_phone != "" && corp_fax != "" && corp_mobile == "" && corp_email == "") {
        numbers = "Phone " + corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "Fax " + corp_fax;
    }
    if (variant_sel_F == "Englisch" && corp_phone != "" && corp_fax == "" && corp_mobile != "" && corp_email == "") {
        numbers = "Phone " + corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "Mobile " + corp_mobile;
    }
    if (variant_sel_F == "Englisch" && corp_phone != "" && corp_fax == "" && corp_mobile == "" && corp_email != "") {
        numbers = "Phone " + corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "E-Mail " + corp_email;
    }
    if (variant_sel_F == "Englisch" && corp_phone == "" && corp_fax != "" && corp_mobile != "" && corp_email == "") {
        numbers = "Fax " + corp_fax + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "Mobile " + corp_mobile;
    }
    if (variant_sel_F == "Englisch" && corp_phone == "" && corp_fax != "" && corp_mobile == "" && corp_email != "") {
        numbers = "Fax " + corp_fax + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "E-Mail " + corp_email;
    }
    if (variant_sel_F == "Englisch" && corp_phone == "" && corp_fax == "" && corp_mobile != "" && corp_email != "") {
        numbers = "Mobile " + corp_mobile + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "E-Mail " + corp_email;
    }
    if (variant_sel_F == "Englisch" && corp_phone != "" && corp_fax == "" && corp_mobile == "" && corp_email == "") {
        numbers = "Phone " + corp_phone;
    }
    if (variant_sel_F == "Englisch" && corp_phone == "" && corp_fax != "" && corp_mobile == "" && corp_email == "") {
        numbers = "Fax " + corp_fax;
    }
    if (variant_sel_F == "Englisch" && corp_phone == "" && corp_fax == "" && corp_mobile != "" && corp_email == "") {
        numbers = "Mobile " + corp_mobile;
    }
    if (variant_sel_F == "Englisch" && corp_phone == "" && corp_fax == "" && corp_mobile == "" && corp_email != "") {
        numbers = "E-Mail " + corp_email;
    }
    if (variant_sel_F == "Englisch" && corp_phone == "" && corp_fax == "" && corp_mobile == "" && corp_email == "") {
        numbers = "";
    }
    return numbers
}

function numbers_R(variant_sel_R, corp_phone, corp_fax, corp_mobile, corp_email_2) {
    var numbers = "";
    if (variant_sel_R == "" && corp_phone != "" && corp_fax != "" && corp_mobile != "" && corp_email_2 != "") {
        numbers = corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + corp_fax + "\n" + corp_mobile + "&nbsp;&nbsp;|&nbsp;&nbsp;" + corp_email_2;
    }
    if (variant_sel_R == "" && corp_phone != "" && corp_fax != "" && corp_mobile != "" && corp_email_2 == "") {
        numbers = corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + corp_fax + "\n" + corp_mobile;
    }
    if (variant_sel_R == "" && corp_phone != "" && corp_fax != "" && corp_mobile == "" && corp_email_2 != "") {
        numbers = corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + corp_fax + "\n" + corp_email_2;
    }
    if (variant_sel_R == "" && corp_phone != "" && corp_fax == "" && corp_mobile != "" && corp_email_2 != "") {
        numbers = corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + corp_mobile + "\n" + corp_email_2;
    }
    if (variant_sel_R == "" && corp_phone == "" && corp_fax != "" && corp_mobile != "" && corp_email_2 != "") {
        numbers = corp_fax + "&nbsp;&nbsp;|&nbsp;&nbsp;" + corp_mobile + "\n" + corp_email_2;
    }
    if (variant_sel_R == "" && corp_phone != "" && corp_fax != "" && corp_mobile == "" && corp_email_2 == "") {
        numbers = corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + corp_fax;
    }
    if (variant_sel_R == "" && corp_phone != "" && corp_fax == "" && corp_mobile != "" && corp_email_2 == "") {
        numbers = corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + corp_mobile;
    }
    if (variant_sel_R == "" && corp_phone != "" && corp_fax == "" && corp_mobile == "" && corp_email_2 != "") {
        numbers = corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + corp_email_2;
    }
    if (variant_sel_R == "" && corp_phone == "" && corp_fax != "" && corp_mobile != "" && corp_email_2 == "") {
        numbers = corp_fax + "&nbsp;&nbsp;|&nbsp;&nbsp;" + corp_mobile;
    }
    if (variant_sel_R == "" && corp_phone == "" && corp_fax != "" && corp_mobile == "" && corp_email_2 != "") {
        numbers = corp_fax + "&nbsp;&nbsp;|&nbsp;&nbsp;" + corp_email_2;
    }
    if (variant_sel_R == "" && corp_phone == "" && corp_fax == "" && corp_mobile != "" && corp_email_2 != "") {
        numbers = corp_mobile + "&nbsp;&nbsp;|&nbsp;&nbsp;" + corp_email_2;
    }
    if (variant_sel_R == "" && corp_phone != "" && corp_fax == "" && corp_mobile == "" && corp_email_2 == "") {
        numbers = corp_phone;
    }
    if (variant_sel_R == "" && corp_phone == "" && corp_fax != "" && corp_mobile == "" && corp_email_2 == "") {
        numbers = corp_fax;
    }
    if (variant_sel_R == "" && corp_phone == "" && corp_fax == "" && corp_mobile != "" && corp_email_2 == "") {
        numbers = corp_mobile;
    }
    if (variant_sel_R == "" && corp_phone == "" && corp_fax == "" && corp_mobile == "" && corp_email_2 != "") {
        numbers = corp_email_2;
    }
    if (variant_sel_R == "Englisch" && corp_phone != "" && corp_fax != "" && corp_mobile != "" && corp_email_2 != "") {
        numbers = "Phone " + corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "Fax " + corp_fax + "\n" + "Mobile " + corp_mobile + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "E-Mail " + corp_email_2;
    }
    if (variant_sel_R == "Englisch" && corp_phone != "" && corp_fax != "" && corp_mobile != "" && corp_email_2 == "") {
        numbers = "Phone " + corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "Fax " + corp_fax + "\n" + "Mobile " + corp_mobile;
    }
    if (variant_sel_R == "Englisch" && corp_phone != "" && corp_fax != "" && corp_mobile == "" && corp_email_2 != "") {
        numbers = "Phone " + corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "Fax " + corp_fax + "\n" + "E-Mail " + corp_email_2;
    }
    if (variant_sel_R == "Englisch" && corp_phone != "" && corp_fax == "" && corp_mobile != "" && corp_email_2 != "") {
        numbers = "Phone " + corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "Mobile " + corp_mobile + "\n" + "E-Mail " + corp_email_2;
    }
    if (variant_sel_R == "Englisch" && corp_phone == "" && corp_fax != "" && corp_mobile != "" && corp_email_2 != "") {
        numbers = "Fax " + corp_fax + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "Mobile " + corp_mobile + "\n" + "E-Mail " + corp_email_2;
    }
    if (variant_sel_R == "Englisch" && corp_phone != "" && corp_fax != "" && corp_mobile == "" && corp_email_2 == "") {
        numbers = "Phone " + corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "Fax " + corp_fax;
    }
    if (variant_sel_R == "Englisch" && corp_phone != "" && corp_fax == "" && corp_mobile != "" && corp_email_2 == "") {
        numbers = "Phone " + corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "Mobile " + corp_mobile;
    }
    if (variant_sel_R == "Englisch" && corp_phone != "" && corp_fax == "" && corp_mobile == "" && corp_email_2 != "") {
        numbers = "Phone " + corp_phone + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "E-Mail " + corp_email_2;
    }
    if (variant_sel_R == "Englisch" && corp_phone == "" && corp_fax != "" && corp_mobile != "" && corp_email_2 == "") {
        numbers = "Fax " + corp_fax + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "Mobile " + corp_mobile;
    }
    if (variant_sel_R == "Englisch" && corp_phone == "" && corp_fax != "" && corp_mobile == "" && corp_email_2 != "") {
        numbers = "Fax " + corp_fax + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "E-Mail " + corp_email_2;
    }
    if (variant_sel_R == "Englisch" && corp_phone == "" && corp_fax == "" && corp_mobile != "" && corp_email_2 != "") {
        numbers = "Mobile " + corp_mobile + "&nbsp;&nbsp;|&nbsp;&nbsp;" + "E-Mail " + corp_email_2;
    }
    if (variant_sel_R == "Englisch" && corp_phone != "" && corp_fax == "" && corp_mobile == "" && corp_email_2 == "") {
        numbers = "Phone " + corp_phone;
    }
    if (variant_sel_R == "Englisch" && corp_phone == "" && corp_fax != "" && corp_mobile == "" && corp_email_2 == "") {
        numbers = "Fax " + corp_fax;
    }
    if (variant_sel_R == "Englisch" && corp_phone == "" && corp_fax == "" && corp_mobile != "" && corp_email_2 == "") {
        numbers = "Mobile " + corp_mobile;
    }
    if (variant_sel_R == "Englisch" && corp_phone == "" && corp_fax == "" && corp_mobile == "" && corp_email_2 != "") {
        numbers = "E-Mail " + corp_email_2;
    }
    return numbers
}

function fullName(corp_academicTitle, corp_firstName, corp_lastName) {
    var fullName;
    if (corp_academicTitle == "") {
        fullName = corp_firstName + " " + corp_lastName;
    } else {
        fullName = corp_academicTitle + " " + corp_firstName + " " + corp_lastName;
    }
    return fullName
}

function fullName_2(corp_academicTitle_2, corp_firstName, corp_lastName) {
    var fullName;
    if (corp_academicTitle_2 == "") {
        fullName = corp_firstName + " " + corp_lastName;
    } else {
        fullName = corp_academicTitle_2 + " " + corp_firstName + " " + corp_lastName;
    }
    return fullName
} 
