
"use client";
import React from "react";

export default function GeoPopup() {
  return (
    <div className="geo-popup" id="geoPopup" aria-hidden="true">
  <div className="geo-popup__inner">
    <p className="geo-popup__text">YOU'RE SHOPPING FROM <span id="geoCountryName"></span></p>
    <p className="geo-popup__sub">SHOP IN <strong id="geoCurrencyCode"></strong>?</p>
    <div className="geo-popup__actions">
      <button type="button" className="geo-popup__btn geo-popup__btn--accept" id="geoAccept">YES, CONTINUE</button>
      <form method="post" action="/localization" id="GeoPopupForm" acceptCharset="UTF-8" className="shopify-localization-form" encType="multipart/form-data"><input type="hidden" name="form_type" value="localization" /><input type="hidden" name="utf8" value="✓" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="return_to" value="/" />
        <input type="hidden" name="country_code" id="geoSwitchCode" value="US" />
        <button type="submit" className="geo-popup__btn geo-popup__btn--decline" id="geoSwitchBtn">SWITCH TO USD</button>
      </form>
    </div>
  </div>
</div>


  );
}
