import React from "react";
import { FeatureGroup, useLeaflet } from "react-leaflet";
import L from "leaflet";
import { EditControl } from "react-leaflet-draw";
import firebase from "../firebase.js";

import "./Draw.css";

const Draw = () => {
    const { map } = useLeaflet();

    // Hacky stuff below
    var smallPlaceBlue = new L.Icon({
        iconUrl: "./icons/place_user.png",
        iconSize: [75, 75],
        iconAnchor: [38, 28],
    });
    var smallIdeaBlue = new L.Icon({
        iconUrl: "./icons/idea_user.png",
        iconSize: [75, 75],
        iconAnchor: [38, 22],
    });
    var smallIssueBlue = new L.Icon({
        iconUrl: "./icons/issue_user.png",
        iconSize: [75, 75],
        iconAnchor: [38, 25],
    });

    L.DrawToolbar.include({
        getModeHandlers: function (map) {
            return [
                {
                    enabled: true,
                    handler: new L.Draw.Marker(map, { icon: smallPlaceBlue }),
                    title: "Add a Special Place",
                },
                {
                    enabled: true,
                    handler: new L.Draw.Marker(map, { icon: smallIdeaBlue }),
                    title: "Add an Idea",
                },
                {
                    enabled: true,
                    handler: new L.Draw.Marker(map, { icon: smallIssueBlue }),
                    title: "Add a Problem",
                },
            ];
        },
    });

    L.drawLocal.draw.toolbar.buttons.marker = "Add a comment";
    L.drawLocal.draw.handlers.marker.tooltip.start =
        "Click map to place comment";
    L.drawLocal.edit.toolbar.actions.save.text = "Save Changes";
    L.drawLocal.edit.toolbar.actions.cancel.text = "Undo";
    L.drawLocal.edit.handlers.remove.tooltip.text =
        "Click on your comment to delete";
    L.drawLocal.edit.toolbar.buttons.edit = "Edit your comments";
    L.drawLocal.edit.toolbar.buttons.editDisabled = "No comments to edit";
    L.drawLocal.edit.toolbar.buttons.remove = "Delete your comments";
    L.drawLocal.edit.toolbar.buttons.removeDisabled = "No comments to delete";

    // ----
    const deletePoint = (layer) => {
        const uid = layer.properties.id;
        console.log(uid);
        var updates = {};
        updates["/points/" + uid] = null;
        updates["/comments/" + uid] = null;
        firebase.database().ref().update(updates);
    };
    const editPoint = (layer) => {
        const uid = layer.properties.id;
        const latlng = layer.getLatLng();
        var updates = {};

        const pointData = {
            lat: latlng.lng,
            lng: latlng.lat,
            type: layer.properties.type,
        };

        updates["/points/" + uid] = pointData;
        //updates["/comments/" + uid] = null;
        firebase.database().ref().update(updates);
    };

    const handleCreate = (e) => {
        const layer = e.layer;
        map.panTo(layer.getLatLng());

        var popup = L.popup().setLatLng(layer.getLatLng()).setContent(
            `<div class="newComment">
                    <h3 class="heading">Comment</h3>
                    <textarea id="commentText" cols="60" rows="5"></textarea>
                    <div class="popName">
                        <label>What's your name? (optional)</label>
                        <input id='commentName' type='text'/>
                    </div>

                    

                    <div class="popReason">
                        <label>What's your relationship to Harrisonburg?</label>
                        <div class='checkGroup'>
                            <input id='popLive' type='checkbox' />
                            <label>I live here</label>
                        </div>
                        <div class='checkGroup'>
                            <input id='popWork' type='checkbox' />
                            <label>I work here</label>
                        </div>
                        <div class='checkGroup'>
                            <input id='popVisit' type='checkbox' />
                            <label>I visit</label>
                        </div>
                    </div>
                    <div class="popEmail">
                        <label>Will you share your email with us? (optional)</label>
                        <input id='commentEmail' type='email' placeholder='Your email'/>
                    </div>

                    <div class="popButtons">
                        <button class="popSave button--primary">Post</button>
                        <button class="popCancel button--secondary">Cancel</button>
                    </div>
                </div>`
        );

        layer.bindPopup(popup).openPopup();
        //layer.on("click", centerAndZoomToPoint);
    };

    const handleEdit = (e) => {
        const layers = e.layers;
        layers.eachLayer(function (layer) {
            if (layer.properties) {
                editPoint(layer);
            }
        });
    };
    const handleDelete = (e) => {
        var layers = e.layers;
        layers.eachLayer(function (layer) {
            if (layer.properties) {
                deletePoint(layer);
            }
        });
    };

    return (
        <FeatureGroup>
            <EditControl
                position="topleft"
                onEdited={handleEdit}
                onCreated={handleCreate}
                onDeleted={handleDelete}
                draw={{
                    polyline: false,
                    polygon: false,
                    circle: false,
                    rectangle: false,
                    circlemarker: false,
                }}
            />
        </FeatureGroup>
    );
};

export default Draw;
