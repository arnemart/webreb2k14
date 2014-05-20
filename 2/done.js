var React = require('react');
var tc = require('react-topcoat');

var noteList = React.createClass({
    render: function() {
        var self = this;
        return tc.list(
            null,
            this.props.notes.map(function(note, id) {
                return React.DOM.li({
                    className: (id === self.props.selectedNote ? 'selected' : ''),
                    onClick: function() {
                        self.props.selectNote(id);
                    }
                }, note);
            })
        );
    }
});

var noteView = React.createClass({
    saveNote: function(e) {
        this.props.saveNote(e.target.value);
    },
    render: function() {
        return tc.textArea({
            onChange: this.saveNote,
            value: this.props.text
        });
    }
});

var mainComponent = React.createClass({
    getInitialState: function() {
        var savedNotes = window.localStorage.getItem('notes');
        if (savedNotes) {
            return JSON.parse(savedNotes);
        } else {
            return {
                notes: ['New note'],
                selectedNote: 0
            };
        }
    },
    selectNote: function(id) {
        this.setState({
            selectedNote: id
        });
    },
    saveNote: function(text) {
        this.state.notes[this.state.selectedNote] = text;
        this.setState({
            notes: this.state.notes
        });
    },
    addNote: function() {
        this.state.notes.push('New note');
        this.setState({
            notes: this.state.notes,
            selectedNote: this.state.notes.length - 1
        });
    },
    componentDidUpdate: function() {
        window.localStorage.setItem('notes', JSON.stringify(this.state));
    },
    render: function() {
        return React.DOM.div(
            null,
            noteView({
                text: this.state.notes[this.state.selectedNote],
                saveNote: this.saveNote
            }),
            noteList({
                notes: this.state.notes,
                selectedNote: this.state.selectedNote,
                selectNote: this.selectNote
            }),
            tc.button(
                {
                    onClick: this.addNote
                },
                'Add note'
            )
        );
    }
});

React.renderComponent(mainComponent(), document.getElementById('main'));
