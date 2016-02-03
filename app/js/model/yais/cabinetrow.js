function modelCabinetRow() {

    var id = "";
    var cabinetletter = "";
    var cabinetid = "";
    var cabinetrowCount = "";
    var mustacheObject = null;
    var template = new templateModelCabinet();

    this.createRoom = function (handleid, handlecabinetletter, handlecabinetid, handlerowcount) {
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

    this.getCabinetLetter = function () {
        return cabinetletter;
    }

    this.getCabinetCabinetID = function () {
        return cabinetid;
    }

    this.getCabinetRowCount = function () {
        return cabinetrowCount;
    }

    this.buildByNewInput = function (handleidletter, handlecabinetid, handlerowcount) {
        cabinetletter = handleidletter;
        cabinetid = handlecabinetid;
        cabinetrowCount = handlerowcount;
    }

}