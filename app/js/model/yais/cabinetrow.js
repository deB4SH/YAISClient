function modelCabinetRow() {

    var id = "";
    var cabinetletter = "";
    var cabinetid = "";
    var cabinetrowCount = "";
    var mustacheObject = null;
    var template = new templateModelCabinet();

    this.createCabinetRow = function (handleid, handlecabinetletter, handlecabinetid, handlerowcount) {
        id = handleid;
        cabinetletter = handlecabinetletter;
        cabinetid = handlecabinetid;
        cabinetrowCount = handlerowcount;

        /*mustacheObject = {
         roomID: handleid,
         roomLocation: handlelocation
         };*/
    }

    this.getID = function () {
        return id;
    }

    this.setID = function (hid) {
        id = hid;
    }

    this.getCabinetRowLetter = function () {
        return cabinetletter;
    }

    this.getCabinetRowCabinetID = function () {
        return cabinetid;
    }

    this.getCabinetRowRowCount = function () {
        return cabinetrowCount;
    }

    this.buildByNewInput = function (handleidletter, handlecabinetid, handlerowcount) {
        cabinetletter = handleidletter;
        cabinetid = handlecabinetid;
        cabinetrowCount = handlerowcount;
    }

}