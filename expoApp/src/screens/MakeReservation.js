import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";

export default function MakeReservation({ navigation }) {
    const [month, setMonth] = useState({ value: "", error: "" });
    const [day, setDay] = useState({ value: new Date().getDate(), error: "" });
    const [hoursFrom, setHoursFrom] = useState({ value: "", error: "" });
    const [minutesFrom, setMinutesFrom] = useState({ value: "", error: "" });
    const [hoursTo, setHoursTo] = useState({ value: "", error: "" });
    const [minutesTo, setMinutesTo] = useState({ value: "", error: "" });

    let DaysTotal = 31;
    var getDaysInMonth = function (month) {
        DaysTotal = Number(new Date(2021, month, 0).getDate());
        console.log(DaysTotal);
    };
    const MonthList = [
        {
            label: "January",
            value: 1,
        },
        {
            label: "Febuary",
            value: 2,
        },
        {
            label: "March",
            value: 3,
        },
        {
            label: "April",
            value: 4,
        },
        {
            label: "May",
            value: 5,
        },
        {
            label: "June",
            value: 6,
        },
        {
            label: "July",
            value: 7,
        },
        {
            label: "August",
            value: 8,
        },
        {
            label: "September",
            value: 9,
        },
        {
            label: "October",
            value: 10,
        },
        {
            label: "November",
            value: 11,
        },
        {
            label: "December",
            value: 12,
        },
    ];
    console.log(MonthList);
    let hoursList = [];
    let minuteList = [];
    let dateList = [];
    const genrateList = (no) => {
        let count = 0;
        for (let hours = 0; hours < 24; hours++) {
            hoursList.push({ label: hours.toString(), value: hours });
            count++;
        }
        count = 0;
        for (let minuteL = 0; minuteL < 60; minuteL++) {
            minuteList.push({ label: minuteL.toString(), value: minuteL });
            count++;
        }
        count = 0;
        for (let i = 1; i < no; i++) {
            dateList.push({ label: i.toString(), value: i });
            count++;
        }
    };
    getDaysInMonth(month);
    genrateList(DaysTotal);
    console.log(dateList);
    return (
        <Background>
            <Logo />
            <Header>Select Month</Header>
            <DropDownPicker
                items={MonthList}
                defaultValue={month}
                label="Select Month"
                containerStyle={{ width: "80%" }}
                style={{ backgroundColor: "#fafafa", width: "100%" }}
                itemStyle={{
                    justifyContent: "flex",
                }}
                dropDownStyle={{ backgroundColor: "#fafafa" }}
                onChangeItem={(item) => {
                    setMonth(item.value);
                }}
            />
            <Header>Select Date</Header>
            <DropDownPicker
                items={dateList}
                defaultValue={day}
                containerStyle={{ width: "80%" }}
                style={{ backgroundColor: "#fafafa", width: "100%" }}
                itemStyle={{
                    justifyContent: "flex",
                }}
                dropDownStyle={{ backgroundColor: "#fafafa" }}
                onChangeItem={(item) => {
                    setDay(item.value);
                }}
            />
            <Header>Select Hour from</Header>
            <DropDownPicker
                items={hoursList}
                defaultValue={hoursFrom}
                containerStyle={{ width: "80%" }}
                style={{ backgroundColor: "#fafafa", width: "100%" }}
                itemStyle={{
                    justifyContent: "flex",
                }}
                dropDownStyle={{ backgroundColor: "#fafafa" }}
                onChangeItem={(item) => {
                    setHoursFrom(item.value);
                }}
            />
            <Header>Select Minute from</Header>
            <DropDownPicker
                items={dateList}
                defaultValue={minutesFrom}
                containerStyle={{ width: "80%" }}
                style={{ backgroundColor: "#fafafa", width: "100%" }}
                itemStyle={{
                    justifyContent: "flex",
                }}
                dropDownStyle={{ backgroundColor: "#fafafa" }}
                onChangeItem={(item) => {
                    setMinutesFrom(item.value);
                }}
            />
            <Header>Select Hour To</Header>
            <DropDownPicker
                items={hoursList}
                defaultValue={hoursTo}
                containerStyle={{ width: "80%" }}
                style={{ backgroundColor: "#fafafa", width: "100%" }}
                itemStyle={{
                    justifyContent: "flex",
                }}
                dropDownStyle={{ backgroundColor: "#fafafa" }}
                onChangeItem={(item) => {
                    setHoursTo(item.value);
                }}
            />
            <Header>Select Minute To</Header>
            <DropDownPicker
                items={dateList}
                defaultValue={minutesTo}
                containerStyle={{ width: "80%" }}
                style={{ backgroundColor: "#fafafa", width: "100%" }}
                itemStyle={{
                    justifyContent: "flex",
                }}
                dropDownStyle={{ backgroundColor: "#fafafa" }}
                onChangeItem={(item) => {
                    setMinutesTo(item.value);
                }}
            />
            <Button
                mode="outlined"
                onPress={() =>
                    navigation.reset({
                        index: 0,
                        routes: [{ name: "Dashboard" }],
                    })
                }
            >
                Confirm
            </Button>
        </Background>
    );
}
