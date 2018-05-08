import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import Loading from "./Loading";
import RC2 from "react-chartjs2";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 3000);
    $("table").tablesort();
  }

  render() {
    console.log("account ", this.props.account); //user account info
    console.log("transaction ", this.props.transaction); //user transaction info
    const { transaction } = this.props;
    const rows = transaction;

    return (
      <ResponsiveContainer>
        <Segment
          id="howItWorksBackground"
          style={{ padding: "1.5em" }}
          vertical
        >
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column
                style={{ paddingBottom: "0.5em", paddingTop: "2em" }}
              >
                {this.state.loading ? (
                  <Loading />
                ) : (
                  <Segment>Transactions</Segment>
                )}

                {rows ? (
                  <div>
                    <RC2
                      data={{
                        labels: [
                          "Bank Fees",
                          "Food and Drink",
                          "Interest",
                          "Recreation",
                          "Service",
                          "Shops",
                          "Transfer",
                          "Travel"
                        ],
                        datasets: [
                          {
                            data: [
                              rows.reduce((acc, curr) => {
                                if (curr.category[0] === "Bank Fees") {
                                  return acc + curr.amount;
                                }
                                return acc;
                              }, 0),
                              rows.reduce((acc, curr) => {
                                if (curr.category[0] === "Food and Drink") {
                                  return acc + curr.amount;
                                }
                                return acc;
                              }, 0),
                              rows.reduce((acc, curr) => {
                                if (curr.category[0] === "Interest") {
                                  return acc + curr.amount;
                                }
                                return acc;
                              }, 0),
                              rows.reduce((acc, curr) => {
                                if (curr.category[0] === "Recreation") {
                                  return acc + curr.amount;
                                }
                                return acc;
                              }, 0),
                              rows.reduce((acc, curr) => {
                                if (curr.category[0] === "Service") {
                                  return acc + curr.amount;
                                }
                                return acc;
                              }, 0),
                              rows.reduce((acc, curr) => {
                                if (curr.category[0] === "Shops") {
                                  return acc + curr.amount;
                                }
                                return acc;
                              }, 0),
                              rows.reduce((acc, curr) => {
                                if (curr.category[0] === "Transfer") {
                                  return acc + curr.amount;
                                }
                                return acc;
                              }, 0),
                              rows.reduce((acc, curr) => {
                                if (curr.category[0] === "Travel") {
                                  return acc + curr.amount;
                                }
                                return acc;
                              }, 0)
                            ],
                            backgroundColor: [
                              "#FF6384",
                              "#D5A0FF",
                              "#FFCE56",
                              "#FF005B",
                              "#00D5D1",
                              "#00A0EF",
                              "#FF8800",
                              "#0095FF"
                            ],
                            hoverBackgroundColor: [
                              "#FF6384",
                              "#36A2EB",
                              "#FFCE56"
                            ]
                          }
                        ]
                      }}
                      type="doughnut"
                    />
                    <table className="ui sortable celled table">
                      <thead>
                        <tr>
                          <th className="">Date</th>
                          <th className="">Name</th>
                          <th className="">Category</th>
                          <th className="sorted ascending">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map(row => {
                          return (
                            <tr key={row.transaction_id}>
                              <td>{row.date}</td>
                              <td>{row.name}</td>
                              <td>{row.category[0]}</td>
                              <td>{row.amount}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                      {/* <tfoot>
                      <tr>
                        <th>3 People</th>
                        <th>2 Approved</th>
                        <th />
                        <th />
                      </tr>
                    </tfoot> */}
                    </table>
                  </div>
                ) : null}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Footer />
      </ResponsiveContainer>
    );
  }
}

const mapState = state => {
  return {
    account: state.accounts.accountInfo,
    transaction: state.transactions.transaction
  };
};

export default connect(mapState)(Transactions);

/*
	A simple, lightweight jQuery plugin for creating sortable tables.
	https://github.com/kylefox/jquery-tablesort
	Version 0.0.11
*/

(function($) {
  $.tablesort = function($table, settings) {
    var self = this;
    this.$table = $table;
    this.$thead = this.$table.find("thead");
    this.settings = $.extend({}, $.tablesort.defaults, settings);
    this.$sortCells =
      this.$thead.length > 0
        ? this.$thead.find("th:not(.no-sort)")
        : this.$table.find("th:not(.no-sort)");
    this.$sortCells.on("click.tablesort", function() {
      self.sort($(this));
    });
    this.index = null;
    this.$th = null;
    this.direction = null;
  };

  $.tablesort.prototype = {
    sort: function(th, direction) {
      var start = new Date(),
        self = this,
        table = this.$table,
        rowsContainer =
          table.find("tbody").length > 0 ? table.find("tbody") : table,
        rows = rowsContainer.find("tr").has("td, th"),
        cells = rows
          .find(":nth-child(" + (th.index() + 1) + ")")
          .filter("td, th"),
        sortBy = th.data().sortBy,
        sortedMap = [];

      var unsortedValues = cells.map(function(idx, cell) {
        if (sortBy) {
          return typeof sortBy === "function"
            ? sortBy($(th), $(cell), self)
            : sortBy;
        }
        return $(this).data().sortValue != null
          ? $(this).data().sortValue
          : $(this).text();
      });
      if (unsortedValues.length === 0) return;

      //click on a different column
      if (this.index !== th.index()) {
        this.direction = "asc";
        this.index = th.index();
      } else if (direction !== "asc" && direction !== "desc") {
        this.direction = this.direction === "asc" ? "desc" : "asc";
      } else {
        this.direction = direction;
      }

      direction = this.direction == "asc" ? 1 : -1;

      self.$table.trigger("tablesort:start", [self]);
      self.log("Sorting by " + this.index + " " + this.direction);

      // Try to force a browser redraw
      self.$table.css("display");
      // Run sorting asynchronously on a timeout to force browser redraw after
      // `tablesort:start` callback. Also avoids locking up the browser too much.
      setTimeout(function() {
        self.$sortCells.removeClass(
          self.settings.asc + " " + self.settings.desc
        );
        for (var i = 0, length = unsortedValues.length; i < length; i++) {
          sortedMap.push({
            index: i,
            cell: cells[i],
            row: rows[i],
            value: unsortedValues[i]
          });
        }

        sortedMap.sort(function(a, b) {
          return self.settings.compare(a.value, b.value) * direction;
        });

        $.each(sortedMap, function(i, entry) {
          rowsContainer.append(entry.row);
        });

        th.addClass(self.settings[self.direction]);

        self.log(
          "Sort finished in " + (new Date().getTime() - start.getTime()) + "ms"
        );
        self.$table.trigger("tablesort:complete", [self]);
        //Try to force a browser redraw
        self.$table.css("display");
      }, unsortedValues.length > 2000 ? 200 : 10);
    },

    log: function(msg) {
      if (
        ($.tablesort.DEBUG || this.settings.debug) &&
        console &&
        console.log
      ) {
        console.log("[tablesort] " + msg);
      }
    },

    destroy: function() {
      this.$sortCells.off("click.tablesort");
      this.$table.data("tablesort", null);
      return null;
    }
  };

  $.tablesort.DEBUG = false;

  $.tablesort.defaults = {
    debug: $.tablesort.DEBUG,
    asc: "sorted ascending",
    desc: "sorted descending",
    compare: function(a, b) {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    }
  };

  $.fn.tablesort = function(settings) {
    var table, sortable, previous;
    return this.each(function() {
      table = $(this);
      previous = table.data("tablesort");
      if (previous) {
        previous.destroy();
      }
      table.data("tablesort", new $.tablesort(table, settings));
    });
  };
})(window.Zepto || window.jQuery);
