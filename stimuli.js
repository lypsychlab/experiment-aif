const first_instructions_page1 = `
    <div class="compare-instructions-display">
    </div>
    <br>
    <br>
    <hr>
    <p style="text-align: left; width: 900px;">
        Thank you for agreeing to participate in this study. The study will have two parts:
        <br>
        <br>
        In the first part, you will walk through an example situation about trying to be fair to two groups of people when admitting patients to an ER at a hospital.
        You will learn that there are multiple ways to define being "fair" and that those definitions can conflict with each other.
        After the example, there will be some questions assessing your understanding of the defintions of fairness (these will not affect your payment in any way).
        <br>
        <br>
        In the second part, you will see the differnt fairness definitions in action on a real world data and have a chance to evaluate how they perform.
        <br>
        <br>
        When you are ready, click "Next" to begin part one.
    </p>
`

const explanation_squares = `
    <div class="groups">
        <div class="group-container group1 nogroup">
            <div class="pos-container">
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
            </div>
            <div class="neg-container">
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
            </div>
        </div>
        <div class="group-container group2 nogroup">
            <div class="pos-container">
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
            </div>
            <div class="neg-container">
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
                <div class="person"></div>
            </div>
        </div>
    </div>
`

const explanation_nums_pos_ungrouped = `
    <div class="numbers ungrouped">
        <div id="numbers_pos">
            <b>Urgent Patients</b>
            <br>
            <span class="num">?</span> / 20 selected
        </div>
    </div>
`

const explanation_nums_neg_ungrouped = `
    <div class="numbers ungrouped">
        <div id="numbers_neg">
            <b>Non-Urgent Patients</b>
            <br>
            <span class="num">?</span> / 20 selected
        </div>
    </div>
`

const explanation_nums_pos_grouped = `
    <div class="numbers grouped">
        <div id="numbers_pos_1">
            <b>Group A</b>
            <br>
            <b>Urgent Patients</b>
            <br>
            <span class="num">?</span> / 12 selected
        </div>
        <div id="numbers_pos_2">
            <b>Group B</b>
            <br>
            <b>Urgent Patients</b>
            <br>
            <span class="num">?</span> / 8 selected
        </div>
    </div>
`

const explanation_nums_neg_grouped = `
    <div class="numbers grouped">
        <div id="numbers_neg_1">
            <b>Group A</b>
            <br>
            <b>Non-Urgent Patients</b>
            <br>
            <span class="num">?</span> / 8 selected
        </div>
        <div id="numbers_neg_2">
            <b>Group B</b>
            <br>
            <b>Non-Urgent Patients</b>
            <br>
            <span class="num">?</span> / 12 selected
        </div>
    </div>
`

const explanation_page1 = `
    <div class="display-container">
        ${explanation_nums_pos_ungrouped}
        ${explanation_squares}
        ${explanation_nums_neg_ungrouped}
    </div>
    <p class="instructions-paragraph" style="text-align: left;">
        Suppose we have 40 people at the hospital, and we can only see 20 of them today. 
        <br>
        <br>
        Naturally, we would expect that some people need to be seen today, while others can wait until tomorrow.
        We'll highlight the people who need to be seen today in a darker gray.
    </p>
`

const explanation_page2 = `
    <div class="display-container">
        ${explanation_nums_pos_ungrouped}
        ${explanation_squares}
        ${explanation_nums_neg_ungrouped}
    </div>
    <p class="instructions-paragraph" style="text-align: left;">
        We would like to see the people who need to be seen and wait to see the people who can wait.
        However, we are likely to make some mistakes in our decision process, so we might end up seeing a set of people like this.
    </p>
`

const explanation_page3 = `
    <div class="display-container">
        ${explanation_nums_pos_grouped}
        ${explanation_squares}
        ${explanation_nums_neg_grouped}
    </div>
    <p class="instructions-paragraph" style="text-align: left;">
        Now suppose that our population of patients is made up equally by two groups of people, Group A (purple) and Group B (green). 
        <br>
        <br>
        Again, in each group, some patients need to be seen today (darker colors) while others do not (lighter colors).
        Let's examine our original selection with these groups shown.
    </p>
`

const explanation_page4 = `
    <div class="display-container">
        ${explanation_nums_pos_grouped}
        ${explanation_squares}
        ${explanation_nums_neg_grouped}
    </div>
    <p class="instructions-paragraph" style="text-align: left;">
        Now that we are paying attention to which group patients belong to, we are arguably being unfair to Group B. 
        <br>
        <br>
        Despite making up half of the population, Group B makes up only 8 / 20 = 40% of the selected patients. 
        In other words, patients have a lower chance of being selected simply by being a member of Group B.
        <br>
        <br>
        This is arguably a problem if we want to be fair to both groups. How might we fix this?
    </p>
`

const explanation_page5 = `
    <div class="display-container">
        ${explanation_nums_pos_grouped}
        ${explanation_squares}
        ${explanation_nums_neg_grouped}
    </div>
    <p class="instructions-paragraph" style="text-align: left;">
        One solution, called <b>Demographic Parity</b>, is to make sure that we select a pool of patients that is representative of the whole population.
        <br>
        <br>
        So, since our patient population is split evenly between the two groups, we will make sure to select 10 patients from Group A and 10 from Group B.
        In this scenario, we might get a selection like this.
        <br>
        <br>
        Now, people from Group A and Group B have an equal chance of being selected.
    </p>
`

const explanation_page6 = `
    <div class="display-container">
        ${explanation_nums_pos_grouped}
        ${explanation_squares}
        ${explanation_nums_neg_grouped}
    </div>
    <p class="instructions-paragraph" style="text-align: left;">
        However, now we are arguably being unfair to Group A. 
        <br>
        <br>
        Of the people who need to be seen today (darker squares), people in Group A have only an 8 / 12 = 66.7% chance of being selected, while people in Group B have an 8 / 8 100% chance. 
        In other words, patients who need to be seen have a lower chance of being selected simply by being a member of Group A.
        <br>
        <br>
        Like before, this is arguably a problem if we want to be fair to both groups. How might we fix this?
    </p>
`

const explanation_page7 = `
    <div class="display-container">
        ${explanation_nums_pos_grouped}
        ${explanation_squares}
        ${explanation_nums_neg_grouped}
    </div>
    <p class="instructions-paragraph" style="text-align: left;">
        In another solution, called <b>Equalized Odds</b>, we will make sure that patients who need to be seen today from both groups have an equal chance of being selected.
        We will do the same for patients who do not need to be seen today.
        <br>
        <br>
        So, of the patients who need to be seen today, we will select 9 / 12 = 75% from Group A, and we will select 6 / 8 = 75% from Group B. 
        Similarly, of the patients who do not need to be seen today, we will select 2 / 8 = 25% from Group A, and we will select 3 / 12 = 25% from Group B.
        <br>
        <br>
        Now, people who need to be seen from Group A and Group B have an equal chance of being selected.
    </p>
`

const explanation_page8 = `
    <div class="display-container">
        ${explanation_nums_pos_grouped}
        ${explanation_squares}
        ${explanation_nums_neg_grouped}
    </div>
    <p class="instructions-paragraph" style="text-align: left;">
        However, we now no longer have <b>Demographic Parity</b>.
        <br>
        <br>
        Despite making up half of the population, Group B makes up only 9 / 20 = 45% of the selected patients. 
        <br>
        <br>
        In fact, it is impossible to satisfy both of the solutions we have considered here.
        <br>
        <br>
        Next, we will ask you some questions about these fairness definitions. Note that your answers to these will not affect your payment in any way.
    </p>
`

function show_selections(group, type, num_selections) {
    var persons = document.querySelectorAll(".group" + group.toString() + " > ." + type + "-container > .person")

    for (let i = 0; i < persons.length; i++) {
        persons[i].classList.remove("selected")

        if (i < num_selections) {
            persons[i].classList.add("selected")
        }
    }
}

function show_selection_nums(type, group, num_selections) {
    if (group == null) {
        document.querySelector("#numbers_" + type + " > .num").textContent = num_selections.toString()
    } else {
        document.querySelector("#numbers_" + type + "_" + group.toString() + " > .num").textContent = num_selections.toString()
    }
}

function update_explanation(explanation_order, page_index) {
    let last_nogroup_page = 2
    let ungrouped = page_index < last_nogroup_page

    if (ungrouped) {
        remove_groups()

        show_selection_nums("pos", null, explanation_order[page_index][0] + explanation_order[page_index][2])
        show_selection_nums("neg", null, explanation_order[page_index][1] + explanation_order[page_index][3])
    } else {
        show_groups()

        show_selection_nums("pos", 1, explanation_order[page_index][0])
        show_selection_nums("neg", 1, explanation_order[page_index][1])
        show_selection_nums("pos", 2, explanation_order[page_index][2])
        show_selection_nums("neg", 2, explanation_order[page_index][3])
    }

    show_selections(1, "pos", explanation_order[page_index][0])
    show_selections(1, "neg", explanation_order[page_index][1])

    show_selections(2, "pos", explanation_order[page_index][2])
    show_selections(2, "neg", explanation_order[page_index][3])
}

function remove_groups() {
    var groups = document.querySelectorAll(".group-container")

    for (let i = 0; i < groups.length; i++) {
        groups[i].classList.add("nogroup")
    }
}

function show_groups() {
    var groups = document.querySelectorAll(".group-container")

    for (let i = 0; i < groups.length; i++) {
        groups[i].classList.remove("nogroup")
    }
}

const comprehension_questions = `
    <div class="prevent-select" style="text-align: left; width: 900px;">
        Comprehension question
        <br>
        <label for="fairest_a">
            <div class="vmulti">
                <input name="fairest" type="radio" value="a" id="fairest_a" />
                Option 1
            </div>
        </label>
        <label for="fairest_b">
            <div class="vmulti">
                <input name="fairest" type="radio" value="b" id="fairest_b" />
                Option 2
            </div>
        </label>
        <label for="fairest_c">
            <div class="vmulti">
                <input name="fairest" type="radio" value="c" id="fairest_c" />
                Option 3
            </div>
        </label>
    </div>
    <br>
    <br>
`

const initial_eval_questions = `
    <div class="prevent-select" style="text-align: left; width: 900px;">
        Please answer the following questions. As a reminder, here are summaries of the fairness definitions:
        <br>
        <br>
        <b>No Correction</b>: Let the models try for pure accuracy alone.
        <br>
        <b>Demographic Parity</b>: Make sure that the selected population has the same proportion of each group as the entire population.
        <br>
        <b>Equalized Odds</b>: Make sure that people who should be selected have the same chance of being selected, regardless of their group.
        <br>
        <br>
        <br>
        In general, which of the fairness definitions do you think is most fair?
        <br>
        <label for="overall_fairest_control">
            <div class="vmulti">
                <input name="overall_fairest" type="radio" value="control" id="overall_fairest_control" />
                    No Correction
            </div>
        </label>
        <label for="overall_fairest_dp">
            <div class="vmulti">
                <input name="overall_fairest" type="radio" value="dp" id="overall_fairest_dp" />
                    Demographic Parity
            </div>
        </label>
        <label for="overall_fairest_eo">
            <div class="vmulti">
                <input name="overall_fairest" type="radio" value="eo" id="overall_fairest_eo" />
                Equalized Odds
            </div>
        </label>
        <br>
        In the context of admitting patients to an Emergency Room, which of the fairness definitions do you think is most fair to apply to men and women?
        <br>
        <label for="er_fairest_control">
            <div class="vmulti">
                <input name="er_fairest" type="radio" value="control" id="er_fairest_control" />
                    No Correction
            </div>
        </label>
        <label for="er_fairest_dp">
            <div class="vmulti">
                <input name="er_fairest" type="radio" value="dp" id="er_fairest_dp" />
                    Demographic Parity
            </div>
        </label>
        <label for="er_fairest_eo">
            <div class="vmulti">
                <input name="er_fairest" type="radio" value="eo" id="er_fairest_eo" />
                Equalized Odds
            </div>
        </label>
        <br>
        In general, how fair do you think each definition is?
        <br>
        <div class="mtable-container">
            <div class="mtable-scale-container">
                <div class="mtable-scale-spacer"></div>
                <div class="mtable-scale-point">1<br>not fair at all</div>
                <div class="mtable-scale-point">2<br>barely fair</div>
                <div class="mtable-scale-point">3<br>a little fair</div>
                <div class="mtable-scale-point">4<br>somewhat fair</div>
                <div class="mtable-scale-point">5<br>moderately fair</div>
                <div class="mtable-scale-point">6<br>fair</div>
                <div class="mtable-scale-point">7<br>very fair</div>
            </div>
            <div class="mtable-statement-container">
                <div class="mtable-statement-text">No Correction</div>
                <label class="mtable-statement-point" for="overall_fair_control_0">
                    <input name="overall_fair_control" type="radio" value="0" id="overall_fair_control_0" />
                </label>
                <label class="mtable-statement-point" for="overall_fair_control_1">
                    <input name="overall_fair_control" type="radio" value="1" id="overall_fair_control_1" />
                </label>
                <label class="mtable-statement-point" for="overall_fair_control_2">
                    <input name="overall_fair_control" type="radio" value="2" id="overall_fair_control_2" />
                </label>
                <label class="mtable-statement-point" for="overall_fair_control_3">
                    <input name="overall_fair_control" type="radio" value="3" id="overall_fair_control_3" />
                </label>
                <label class="mtable-statement-point" for="overall_fair_control_4">
                    <input name="overall_fair_control" type="radio" value="4" id="overall_fair_control_4" />
                </label>
                <label class="mtable-statement-point" for="overall_fair_control_5">
                    <input name="overall_fair_control" type="radio" value="5" id="overall_fair_control_5" />
                </label>
                <label class="mtable-statement-point" for="overall_fair_control_6">
                    <input name="overall_fair_control" type="radio" value="6" id="overall_fair_control_6"  />
                </label>
            </div>
            <div class="mtable-statement-container">
                <div class="mtable-statement-text">Demographic Parity</div>
                <label class="mtable-statement-point" for="overall_fair_dp_0">
                    <input name="overall_fair_dp" type="radio" value="0" id="overall_fair_dp_0" />
                </label>
                <label class="mtable-statement-point" for="overall_fair_dp_1">
                    <input name="overall_fair_dp" type="radio" value="1" id="overall_fair_dp_1" />
                </label>
                <label class="mtable-statement-point" for="overall_fair_dp_2">
                    <input name="overall_fair_dp" type="radio" value="2" id="overall_fair_dp_2" />
                </label>
                <label class="mtable-statement-point" for="overall_fair_dp_3">
                    <input name="overall_fair_dp" type="radio" value="3" id="overall_fair_dp_3" />
                </label>
                <label class="mtable-statement-point" for="overall_fair_dp_4">
                    <input name="overall_fair_dp" type="radio" value="4" id="overall_fair_dp_4" />
                </label>
                <label class="mtable-statement-point" for="overall_fair_dp_5">
                    <input name="overall_fair_dp" type="radio" value="5" id="overall_fair_dp_5" />
                </label>
                <label class="mtable-statement-point" for="overall_fair_dp_6">
                    <input name="overall_fair_dp" type="radio" value="6" id="overall_fair_dp_6" />
                </label>
            </div>
            <div class="mtable-statement-container">
                <div class="mtable-statement-text">Equalized Odds</div>
                <label class="mtable-statement-point" for="overall_fair_eo_0">
                    <input name="overall_fair_eo" type="radio" value="0" id="overall_fair_eo_0" />
                </label>
                <label class="mtable-statement-point" for="overall_fair_eo_1">
                    <input name="overall_fair_eo" type="radio" value="1" id="overall_fair_eo_1" />
                </label>
                <label class="mtable-statement-point" for="overall_fair_eo_2">
                    <input name="overall_fair_eo" type="radio" value="2" id="overall_fair_eo_2" />
                </label>
                <label class="mtable-statement-point" for="overall_fair_eo_3">
                    <input name="overall_fair_eo" type="radio" value="3" id="overall_fair_eo_3" />
                </label>
                <label class="mtable-statement-point" for="overall_fair_eo_4">
                    <input name="overall_fair_eo" type="radio" value="4" id="overall_fair_eo_4" />
                </label>
                <label class="mtable-statement-point" for="overall_fair_eo_5">
                    <input name="overall_fair_eo" type="radio" value="5" id="overall_fair_eo_5" />
                </label>
                <label class="mtable-statement-point" for="overall_fair_eo_6">
                    <input name="overall_fair_eo" type="radio" value="6" id="overall_fair_eo_6" />
                </label>
            </div>
        </div>
        <br>
        In the context of admitting patients to an Emergency Room, how fair do you think it is to apply each definition to men and women?
        <br>
        <div class="mtable-container">
            <div class="mtable-scale-container">
                <div class="mtable-scale-spacer"></div>
                <div class="mtable-scale-point">1<br>not fair at all</div>
                <div class="mtable-scale-point">2<br>barely fair</div>
                <div class="mtable-scale-point">3<br>a little fair</div>
                <div class="mtable-scale-point">4<br>somewhat fair</div>
                <div class="mtable-scale-point">5<br>moderately fair</div>
                <div class="mtable-scale-point">6<br>fair</div>
                <div class="mtable-scale-point">7<br>very fair</div>
            </div>
            <div class="mtable-statement-container">
                <div class="mtable-statement-text">No Correction</div>
                <label class="mtable-statement-point" for="er_fair_control_0">
                    <input name="er_fair_control" type="radio" value="0" id="er_fair_control_0" />
                </label>
                <label class="mtable-statement-point" for="er_fair_control_1">
                    <input name="er_fair_control" type="radio" value="1" id="er_fair_control_1" />
                </label>
                <label class="mtable-statement-point" for="er_fair_control_2">
                    <input name="er_fair_control" type="radio" value="2" id="er_fair_control_2" />
                </label>
                <label class="mtable-statement-point" for="er_fair_control_3">
                    <input name="er_fair_control" type="radio" value="3" id="er_fair_control_3" />
                </label>
                <label class="mtable-statement-point" for="er_fair_control_4">
                    <input name="er_fair_control" type="radio" value="4" id="er_fair_control_4" />
                </label>
                <label class="mtable-statement-point" for="er_fair_control_5">
                    <input name="er_fair_control" type="radio" value="5" id="er_fair_control_5" />
                </label>
                <label class="mtable-statement-point" for="er_fair_control_6">
                    <input name="er_fair_control" type="radio" value="6" id="er_fair_control_6"  />
                </label>
            </div>
            <div class="mtable-statement-container">
                <div class="mtable-statement-text">Demographic Parity</div>
                <label class="mtable-statement-point" for="er_fair_dp_0">
                    <input name="er_fair_dp" type="radio" value="0" id="er_fair_dp_0" />
                </label>
                <label class="mtable-statement-point" for="er_fair_dp_1">
                    <input name="er_fair_dp" type="radio" value="1" id="er_fair_dp_1" />
                </label>
                <label class="mtable-statement-point" for="er_fair_dp_2">
                    <input name="er_fair_dp" type="radio" value="2" id="er_fair_dp_2" />
                </label>
                <label class="mtable-statement-point" for="er_fair_dp_3">
                    <input name="er_fair_dp" type="radio" value="3" id="er_fair_dp_3" />
                </label>
                <label class="mtable-statement-point" for="er_fair_dp_4">
                    <input name="er_fair_dp" type="radio" value="4" id="er_fair_dp_4" />
                </label>
                <label class="mtable-statement-point" for="er_fair_dp_5">
                    <input name="er_fair_dp" type="radio" value="5" id="er_fair_dp_5" />
                </label>
                <label class="mtable-statement-point" for="er_fair_dp_6">
                    <input name="er_fair_dp" type="radio" value="6" id="er_fair_dp_6" />
                </label>
            </div>
            <div class="mtable-statement-container">
                <div class="mtable-statement-text">Equalized Odds</div>
                <label class="mtable-statement-point" for="er_fair_eo_0">
                    <input name="er_fair_eo" type="radio" value="0" id="er_fair_eo_0" />
                </label>
                <label class="mtable-statement-point" for="er_fair_eo_1">
                    <input name="er_fair_eo" type="radio" value="1" id="er_fair_eo_1" />
                </label>
                <label class="mtable-statement-point" for="er_fair_eo_2">
                    <input name="er_fair_eo" type="radio" value="2" id="er_fair_eo_2" />
                </label>
                <label class="mtable-statement-point" for="er_fair_eo_3">
                    <input name="er_fair_eo" type="radio" value="3" id="er_fair_eo_3" />
                </label>
                <label class="mtable-statement-point" for="er_fair_eo_4">
                    <input name="er_fair_eo" type="radio" value="4" id="er_fair_eo_4" />
                </label>
                <label class="mtable-statement-point" for="er_fair_eo_5">
                    <input name="er_fair_eo" type="radio" value="5" id="er_fair_eo_5" />
                </label>
                <label class="mtable-statement-point" for="er_fair_eo_6">
                    <input name="er_fair_eo" type="radio" value="6" id="er_fair_eo_6" />
                </label>
            </div>
        </div>
    </div>
    <br>
`

const compare_instructions_page1 = `
    <div class="compare-instructions-display">
    </div>
    <br>
    <br>
    <hr>
    <p style="text-align: left; width: 900px;">
        In the next portion of the experiment, you will see how the fairness definitions you just learned about might be applied in the real world.
        <br>
        <br>
        Specifically, you will examine decisions made on Emergency Room (ER) patients.
    </p>
`

const compare_instructions_page2 = `
    <div class="compare-instructions-display">
        <div class="model-info">
            <div class="model-selector">
                <label for="models">Current Model:</label>
                <select class="model-dropdown" name="models" id="models" disabled>
                    <option value="nomodel">Choose a model</option>
                    <option value="a">Model A</option>
                    <option value="b">Model B</option>
                    <option value="c">Model C</option>
                </select>
            </div>
        </div>
        <br>
        <br>
        <div class="profiles-container">
            <div class="profile" id="person-1">
                <div class="profile-col">
                    <div class="profile-icon">
                        <div class="head"></div>
                        <div class="shoulders"></div>
                    </div>
                    <div class="profile-decision profile-text">
                        Decision<br><span id="person1-decision" class="decision">&nbsp;</span>
                    </div>
                </div>
                <div class="profile-col profile-text">
                    <div class="profile-age">
                        <b>Age:</b> 50
                    </div>
                    <div class="profile-gender">
                        <b>Gender:</b> Man
                    </div>
                    <div class="profile-esi">
                        <b>ESI Score:</b> 3
                    </div>
                    <div class="profile-complaint">
                        <b>Complaint:</b> Fatigue
                    </div>
                </div>
            </div>
            <div class="profile" id="person-1">
                <div class="profile-col">
                    <div class="profile-icon">
                        <div class="head"></div>
                        <div class="shoulders"></div>
                    </div>
                    <div class="profile-decision profile-text">
                        Decision<br><span id="person1-decision" class="decision">&nbsp;</span>
                    </div>
                </div>
                <div class="profile-col profile-text">
                    <div class="profile-age">
                        <b>Age:</b> 42
                    </div>
                    <div class="profile-gender">
                        <b>Gender:</b> Woman
                    </div>
                    <div class="profile-esi">
                        <b>ESI Score:</b> 3
                    </div>
                    <div class="profile-complaint">
                        <b>Complaint:</b> Nausea
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
    <br>
    <hr>
    <p style="text-align: left; width: 900px;">
        In each round, you will see a set of six patients, learning their age, gender, ESI score, and chief complaint. 
        <br>
        <br>
        Each patient's chief complaint is the main symptom or issue that they reported to the intake desk at the ER. Examples include chest pain, fatigue, and XYZ.
        <br>
        <br>
        Each patient's ESI score is a number given by the people working at the intake desk, representing the severity of the patient's condition. 
        ESI scores range from 1 to 5, with 5 being the least urgent and 1 being the most urgent.
    </p>
`

const compare_instructions_page3 = `
    <div class="compare-instructions-display">
        <div class="model-info">
            <div class="model-selector">
                <label for="models">Current Model:</label>
                <select class="model-dropdown" name="models" id="models" disabled>
                    <option value="a">Model A</option>
                    <option value="nomodel">Choose a model</option>
                    <option value="b">Model B</option>
                    <option value="c">Model C</option>
                </select>
            </div>
        </div>
        <br>
        <br>
        <div class="profiles-container">
            <div class="profile admit" id="person-1">
                <div class="profile-col">
                    <div class="profile-icon">
                        <div class="head"></div>
                        <div class="shoulders"></div>
                    </div>
                    <div class="profile-decision profile-text">
                        Decision<br><span id="person1-decision" class="decision">ADMITTED</span>
                    </div>
                </div>
                <div class="profile-col profile-text">
                    <div class="profile-age">
                        <b>Age:</b> 50
                    </div>
                    <div class="profile-gender">
                        <b>Gender:</b> Man
                    </div>
                    <div class="profile-esi">
                        <b>ESI Score:</b> 3
                    </div>
                    <div class="profile-complaint">
                        <b>Complaint:</b> Fatigue
                    </div>
                </div>
            </div>
            <div class="profile deny" id="person-1">
                <div class="profile-col">
                    <div class="profile-icon">
                        <div class="head"></div>
                        <div class="shoulders"></div>
                    </div>
                    <div class="profile-decision profile-text">
                        Decision<br><span id="person1-decision" class="decision">DENIED</span>
                    </div>
                </div>
                <div class="profile-col profile-text">
                    <div class="profile-age">
                        <b>Age:</b> 42
                    </div>
                    <div class="profile-gender">
                        <b>Gender:</b> Woman
                    </div>
                    <div class="profile-esi">
                        <b>ESI Score:</b> 3
                    </div>
                    <div class="profile-complaint">
                        <b>Complaint:</b> Nausea
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
    <br>
    <hr>
    <p style="text-align: left; width: 900px;">
        For each group of six patients, you can use the selector at the top to switch freely between three models to see how those models decide to admit or deny the patients.
        <br>
        <br>
        Admitted patients will be highlighted in green, while denied patients will be highlighted in red. The words "ADMITTED" and "DENIED" will also appear in the bottom left of each patient's rectangle.
    </p>
`

const compare_instructions_page4 = `
    <div class="compare-instructions-display">
        <div class="model-explain">
            <div class="model-explain-stack">
                <span>Model A</span>
                <span>Model B</span>
                <span>Model C</span>
            </div>
            <div class="model-explain-stack">
                <div class="line left" style="transform: rotate(30deg);"></div>
                <div class="line left"></div>
                <div class="line left" style="transform: rotate(-30deg);"></div>
            </div>
            <div class="model-explain-stack">
                <span style="font-size: 40px;">?</span>
            </div>
            <div class="model-explain-stack">
                <div class="line right" style="transform: rotate(-30deg);"></div>
                <div class="line right"></div>
                <div class="line right" style="transform: rotate(30deg);"></div>
            </div>
            <div class="model-explain-stack">
                <span>No Fairness</span>
                <span>Demographic Parity</span>
                <span>Equalized Odds</span>
            </div>
        </div>
    </div>
    <br>
    <br>
    <hr>
    <p style="text-align: left; width: 900px;">
        The three models that you switch between will be trained on different fairness goals with regard to the gender of the patients (i.e., different ways of trying to make sure men and women are treated fairly).
        <br>    
        <br>    
        One will try to achieve demographic parity, another equalized odds, and the third will not try to achieve any fairness definition.
        <br>
        <br>
        However, you will not be told which model is which. 
    </p>
`

const compare_instructions_page5 = `
    <div class="compare-instructions-display">
    </div>
    <br>
    <br>
    <hr>
    <p style="text-align: left; width: 900px;">
        After seeing the decisions of each model, you will be asked to rate the models on how fair they are to men and women. You will also be asked to choose which model you think is the most fair. 
        <br>
        <br>
        You must use the selector to view a model before you can rate its fairness, and you must view all three models before you can choose which one you think is most fair.
        <br>
        <br>
        There will be [number] rounds of this. Press the button below to begin. 
    </p>
`

function compare_models_stimulus(persons) {
    let models = ["control", "dp", "eo"]

    shuffleArray(models)

    let string = `
        <div class="stimulus-wrapper">
            <div class="model-info">
                <div class="model-selector">
                    <label for="models">Current Model:</label>
                    <select class="model-dropdown" name="models" id="models" onchange="update_model(this.value, current_persons)">
                        <option value="nomodel">Choose a model</option>
                        <option value="${models[0]}">Model A</option>
                        <option value="${models[1]}">Model B</option>
                        <option value="${models[2]}">Model C</option>
                    </select>
                </div>
            </div>
            <br>
            <br>
            <div class="profiles-container">
                <div class="profile" id="person-1">
                    <div class="profile-col">
                        <div class="profile-icon">
                            <div class="head"></div>
                            <div class="shoulders"></div>
                        </div>
                        <div class="profile-decision profile-text">
                            Decision<br><span id="person1-decision" class="decision">&nbsp;</span>
                        </div>
                    </div>
                    <div class="profile-col profile-text">
                        <div class="profile-age">
                            <b>Age:</b> ${persons[0]["age"]}
                        </div>
                        <div class="profile-gender">
                            <b>Gender:</b> ${persons[0]["gender"]}
                        </div>
                        <div class="profile-esi">
                            <b>ESI Score:</b> ${persons[0]["esi"]}
                        </div>
                        <div class="profile-complaint">
                            <b>Complaint:</b> ${persons[0]["complaint"]}
                        </div>
                    </div>
                </div>
                <div class="profile" id="person-2">
                    <div class="profile-col">
                        <div class="profile-icon">
                            <div class="head"></div>
                            <div class="shoulders"></div>
                        </div>
                        <div class="profile-decision profile-text">
                            Decision<br><span id="person2-decision" class="decision">&nbsp;</span>
                        </div>
                    </div>
                    <div class="profile-col profile-text">
                        <div class="profile-age">
                            <b>Age:</b> ${persons[1]["age"]}
                        </div>
                        <div class="profile-gender">
                            <b>Gender:</b> ${persons[1]["gender"]}
                        </div>
                        <div class="profile-esi">
                            <b>ESI Score:</b> ${persons[1]["esi"]}
                        </div>
                        <div class="profile-complaint">
                            <b>Complaint:</b> ${persons[1]["complaint"]}
                        </div>
                    </div>
                </div>
                <div class="profile" id="person-3">
                    <div class="profile-col">
                        <div class="profile-icon">
                            <div class="head"></div>
                            <div class="shoulders"></div>
                        </div>
                        <div class="profile-decision profile-text">
                            Decision<br><span id="person3-decision" class="decision">&nbsp;</span>
                        </div>
                    </div>
                    <div class="profile-col profile-text">
                        <div class="profile-age">
                            <b>Age:</b> ${persons[2]["age"]}
                        </div>
                        <div class="profile-gender">
                            <b>Gender:</b> ${persons[2]["gender"]}
                        </div>
                        <div class="profile-esi">
                            <b>ESI Score:</b> ${persons[2]["esi"]}
                        </div>
                        <div class="profile-complaint">
                            <b>Complaint:</b> ${persons[2]["complaint"]}
                        </div>
                    </div>
                </div>
                <div class="profile" id="person-4">
                    <div class="profile-col">
                        <div class="profile-icon">
                            <div class="head"></div>
                            <div class="shoulders"></div>
                        </div>
                        <div class="profile-decision profile-text">
                            Decision<br><span id="person4-decision" class="decision">&nbsp;</span>
                        </div>
                    </div>
                    <div class="profile-col profile-text">
                        <div class="profile-age">
                            <b>Age:</b> ${persons[3]["age"]}
                        </div>
                        <div class="profile-gender">
                            <b>Gender:</b> ${persons[3]["gender"]}
                        </div>
                        <div class="profile-esi">
                            <b>ESI Score:</b> ${persons[3]["esi"]}
                        </div>
                        <div class="profile-complaint">
                            <b>Complaint:</b> ${persons[3]["complaint"]}
                        </div>
                    </div>
                </div>
                <div class="profile" id="person-5">
                    <div class="profile-col">
                        <div class="profile-icon">
                            <div class="head"></div>
                            <div class="shoulders"></div>
                        </div>
                        <div class="profile-decision profile-text">
                            Decision<br><span id="person5-decision" class="decision">&nbsp;</span>
                        </div>
                    </div>
                    <div class="profile-col profile-text">
                        <div class="profile-age">
                            <b>Age:</b> ${persons[4]["age"]}
                        </div>
                        <div class="profile-gender">
                            <b>Gender:</b> ${persons[4]["gender"]}
                        </div>
                        <div class="profile-esi">
                            <b>ESI Score:</b> ${persons[4]["esi"]}
                        </div>
                        <div class="profile-complaint">
                            <b>Complaint:</b> ${persons[4]["complaint"]}
                        </div>
                    </div>
                </div>
                <div class="profile" id="person-6">
                    <div class="profile-col">
                        <div class="profile-icon">
                            <div class="head"></div>
                            <div class="shoulders"></div>
                        </div>
                        <div class="profile-decision profile-text">
                            Decision<br><span id="person6-decision" class="decision">&nbsp;</span>
                        </div>
                    </div>
                    <div class="profile-col profile-text">
                        <div class="profile-age">
                            <b>Age:</b> ${persons[5]["age"]}
                        </div>
                        <div class="profile-gender">
                            <b>Gender:</b> ${persons[5]["gender"]}
                        </div>
                        <div class="profile-esi">
                            <b>ESI Score:</b> ${persons[5]["esi"]}
                        </div>
                        <div class="profile-complaint">
                            <b>Complaint:</b> ${persons[5]["complaint"]}
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <div class="prevent-select" style="text-align: left;">
                How fair do you think each model is?
                <br>
                <div class="mtable-container">
                    <div class="mtable-scale-container">
                        <div class="mtable-scale-spacer"></div>
                        <div class="mtable-scale-point">1<br>not fair at all</div>
                        <div class="mtable-scale-point">2<br>barely fair</div>
                        <div class="mtable-scale-point">3<br>a little fair</div>
                        <div class="mtable-scale-point">4<br>somewhat fair</div>
                        <div class="mtable-scale-point">5<br>moderately fair</div>
                        <div class="mtable-scale-point">6<br>fair</div>
                        <div class="mtable-scale-point">7<br>very fair</div>
                    </div>
                    <div class="mtable-statement-container">
                        <div class="mtable-statement-text">Model A</div>
                        <label class="mtable-statement-point" for="fair_${models[0]}_0">
                            <input name="fair_${models[0]}" type="radio" value="0" id="fair_${models[0]}_0" disabled />
                        </label>
                        <label class="mtable-statement-point" for="fair_${models[0]}_1">
                            <input name="fair_${models[0]}" type="radio" value="1" id="fair_${models[0]}_1" disabled />
                        </label>
                        <label class="mtable-statement-point" for="fair_${models[0]}_2">
                            <input name="fair_${models[0]}" type="radio" value="2" id="fair_${models[0]}_2" disabled />
                        </label>
                        <label class="mtable-statement-point" for="fair_${models[0]}_3">
                            <input name="fair_${models[0]}" type="radio" value="3" id="fair_${models[0]}_3" disabled />
                        </label>
                        <label class="mtable-statement-point" for="fair_${models[0]}_4">
                            <input name="fair_${models[0]}" type="radio" value="4" id="fair_${models[0]}_4" disabled />
                        </label>
                        <label class="mtable-statement-point" for="fair_${models[0]}_5">
                            <input name="fair_${models[0]}" type="radio" value="5" id="fair_${models[0]}_5" disabled />
                        </label>
                        <label class="mtable-statement-point" for="fair_${models[0]}_6">
                            <input name="fair_${models[0]}" type="radio" value="6" id="fair_${models[0]}_6" disabled />
                        </label>
                    </div>
                    <div class="mtable-statement-container">
                        <div class="mtable-statement-text">Model B</div>
                        <label class="mtable-statement-point" for="fair_${models[1]}_0">
                            <input name="fair_${models[1]}" type="radio" value="0" id="fair_${models[1]}_0" disabled />
                        </label>
                        <label class="mtable-statement-point" for="fair_${models[1]}_1">
                            <input name="fair_${models[1]}" type="radio" value="1" id="fair_${models[1]}_1" disabled />
                        </label>
                        <label class="mtable-statement-point" for="fair_${models[1]}_2">
                            <input name="fair_${models[1]}" type="radio" value="2" id="fair_${models[1]}_2" disabled />
                        </label>
                        <label class="mtable-statement-point" for="fair_${models[1]}_3">
                            <input name="fair_${models[1]}" type="radio" value="3" id="fair_${models[1]}_3" disabled />
                        </label>
                        <label class="mtable-statement-point" for="fair_${models[1]}_4">
                            <input name="fair_${models[1]}" type="radio" value="4" id="fair_${models[1]}_4" disabled />
                        </label>
                        <label class="mtable-statement-point" for="fair_${models[1]}_5">
                            <input name="fair_${models[1]}" type="radio" value="5" id="fair_${models[1]}_5" disabled />
                        </label>
                        <label class="mtable-statement-point" for="fair_${models[1]}_6">
                            <input name="fair_${models[1]}" type="radio" value="6" id="fair_${models[1]}_6" disabled />
                        </label>
                    </div>
                    <div class="mtable-statement-container">
                        <div class="mtable-statement-text">Model C</div>
                        <label class="mtable-statement-point" for="fair_${models[2]}_0">
                            <input name="fair_${models[2]}" type="radio" value="0" id="fair_${models[2]}_0" disabled />
                        </label>
                        <label class="mtable-statement-point" for="fair_${models[2]}_1">
                            <input name="fair_${models[2]}" type="radio" value="1" id="fair_${models[2]}_1" disabled />
                        </label>
                        <label class="mtable-statement-point" for="fair_${models[2]}_2">
                            <input name="fair_${models[2]}" type="radio" value="2" id="fair_${models[2]}_2" disabled />
                        </label>
                        <label class="mtable-statement-point" for="fair_${models[2]}_3">
                            <input name="fair_${models[2]}" type="radio" value="3" id="fair_${models[2]}_3" disabled />
                        </label>
                        <label class="mtable-statement-point" for="fair_${models[2]}_4">
                            <input name="fair_${models[2]}" type="radio" value="4" id="fair_${models[2]}_4" disabled />
                        </label>
                        <label class="mtable-statement-point" for="fair_${models[2]}_5">
                            <input name="fair_${models[2]}" type="radio" value="5" id="fair_${models[2]}_5" disabled />
                        </label>
                        <label class="mtable-statement-point" for="fair_${models[2]}_6">
                            <input name="fair_${models[2]}" type="radio" value="6" id="fair_${models[2]}_6" disabled />
                        </label>
                    </div>
                </div>
                <br>
                In this example, which model do you think is the most fair?
                <br>
                <label for="fairest_a">
                    <div class="vmulti">
                        <input name="fairest" type="radio" value="${models[0]}" id="fairest_a" disabled />
                        Model A
                    </div>
                </label>
                <label for="fairest_b">
                    <div class="vmulti">
                        <input name="fairest" type="radio" value="${models[1]}" id="fairest_b" disabled />
                        Model B
                    </div>
                </label>
                <label for="fairest_c">
                    <div class="vmulti">
                        <input name="fairest" type="radio" value="${models[2]}" id="fairest_c" disabled />
                        Model C
                    </div>
                </label>
            </div>
            <br>
            <br>
            <button class="model-compare-button disabled" onclick="compare_models_check_finish()">Done</button>
        </div>
    `

    return string
}

function update_model(model, persons) {
    models_viewed.push(model)

    // update patient displays with model decisions
    for (let i = 0; i < persons.length; i++) {
        let person = persons[i]

        let decision = person["decisions"][model]
        let decision_element = document.getElementById(`person${i + 1}-decision`)
        
        decision_element.textContent = decision

        let profile_element = document.getElementById(`person-${i + 1}`)

        if (decision == "ADMITTED") {
            profile_element.classList.remove("deny")

            profile_element.classList.add("admit")
        } else if (decision == "DENIED") {
            profile_element.classList.remove("admit")
            
            profile_element.classList.add("deny")
        } else {
            profile_element.classList.remove("admit")
            profile_element.classList.remove("deny")
        }
    }
    
    // enable the likert scale for the model that has been switched to
    let fair_options = document.querySelectorAll(`input[name="fair_${model}"]`)

    for (let option of fair_options) {
        option.disabled = false
    }
    
    // check if all models have been seen
    let all_models = ["control", "dp", "eo"]

    for (let model of all_models) {
        if (!models_viewed.includes(model)) {
            return
        }
    }
    
    // enable the likert scale for the model that has been switched to
    let fairest_options = document.querySelectorAll(`input[name="fairest"]`)

    for (let option of fairest_options) {
        option.disabled = false
    }

    document.querySelector(".model-compare-button").classList.remove("disabled")
}

function compare_models_check_finish() {
    // check that they have seen all models
    let all_models = ["control", "dp", "eo"]

    for (let model of all_models) {
        if (!models_viewed.includes(model)) {
            alert("Please view all models before moving on.")

            return
        }
    }

    // check that they have answered all questions
    try {
        current_fairest = document.querySelector('input[name="fairest"]:checked').value
        current_fair_control = document.querySelector('input[name="fair_control"]:checked').value
        current_fair_dp = document.querySelector('input[name="fair_dp"]:checked').value
        current_fair_eo = document.querySelector('input[name="fair_eo"]:checked').value
    } catch (err) {
        if (err instanceof TypeError) {
            alert("Please answer all questions on the page.")

            return
        } else {
            throw err
        }
    }

    jsPsych.finishTrial()
}