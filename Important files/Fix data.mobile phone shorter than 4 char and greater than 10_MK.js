function process(record, ctx, logger, next) {
    
    
    var mobileOrPhoneGreaterThanTen =['52,999,999,999,999,900,000,000,000,000', 'yonatanhm88@hotmail.com','Angy_leo.love', '56CÃ³rdobaVeracruzMÃ©xico', '00000000000000000000', 'Brisaguemez@gmail.com', 'Carpug90_@hotmail.com', 'nlarraga@ucol.mx', 'Optiocillumearum', 'eyazmin.96@gmail.com', 'osorioemmanuel_@hotmail.com', 'JvsTchepito02@gmail.com', 'iberojimena@gmail.com', 'nickymountss@gmail.com', '8712627736y/o5551113416/5624306417', '2294139410o2292854464', 'ahtziri.esca_cp@hotmail.com', 'Teléfon8180173564oconLada', '8712627736y/o5551113416/5624306417', '61423480764993300', '5705142057051420', '5540574717y5584708270', 'juanpablogm4185@gmail.com', 'Jksalazar90@hotmail.com', 'Vazqueluis96@gmail.com', 'Nisiipsammollitfu', 'Calle7#1830colmorelos', '9141120992y9141299879', 'gironlopezlenape@gmail.com', '5210444441177782', '5555555555555555', '777 ei mmui uenas a todos', 'venustiano Carranza #33'];
    
    if(record && record.data && ((record.data.mobile &&record.data.mobile.length < 4 || record.data.mobile &&record.data.mobile.length > 10) || (record.data.phone && record.data.phone.length < 4 || record.data.phone && record.data.phone.length > 10))) {
        var newRecord = {};
        newRecord.UID = record.UID;
        newRecord.profile = record.profile;
        newRecord.data = {};
        if (record.data.mobile && record.data.mobile.length < 4) {
            newRecord.data.mobile = " ";
        }
        if (record.data.mobile && record.data.mobile.length > 10 && mobileOrPhoneGreaterThanTen.indexOf(record.data.mobile) !== -1) {
            //logger.info('mobile:', record.data.mobile);
            newRecord.data.mobile = " ";
        }
        if(record.data.phone && record.data.phone.length < 4) {
           newRecord.data.phone = " "; 
        }
         if(record.data.phone && record.data.phone.length > 10 && mobileOrPhoneGreaterThanTen.indexOf(record.data.phone) !== -1 ) {
             //logger.info('phone:', record.data.phone);
           newRecord.data.phone = " "; 
        }
        newRecord.hasFullAccount = record.hasFullAccount;
        newRecord.hasLiteAccount = record.hasLiteAccount;
        return newRecord;
    }    
}x