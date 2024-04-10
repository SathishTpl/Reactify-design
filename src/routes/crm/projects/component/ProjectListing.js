/**
 * Project Listing layout
 */
/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { useTable } from 'react-table';
import { Badge } from 'reactstrap';

// rct card box
import { RctCard, RctCardContent } from 'Components/RctCard';

// helpers
import { getAppLayout } from "Helpers/helpers";

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

class ProjectListing extends Component {

   state = {
      selected: null,
      detail: null
   }
   // get file id
   getFile(Id) {
      this.setState({
         detail: Id
      });
   }

   render() {
      const { data } = this.props;
      const { detail } = this.state;
      if (detail !== null) {
         return <Redirect to={`/${getAppLayout(location)}/crm/Project-detail/${detail}`} />
      }
      const columns = [
         {
            maxWidth: 75,
            Header: 'id',
            accessor: 'id'
         },
         {
            maxWidth: 220,
            Header: 'projectName',
            accessor: 'title',
         },
         {
            Header: 'budget',
            accessor: 'budget',
         },
         {
            Header: 'duration',
            accessor: 'duration',
         },
         {
            Header: 'client',
            accessor: 'client',
         },
         {
            Header: 'team',
            accessor: 'team_image',
            Cell: props => <Fragment>
               {props.value.map((image, index) => {
                  return (
                     <img
                        key={index}
                        src={require(`Assets/avatars/${image}`)}
                        alt="team"
                        className="rounded-circle"
                        width="20"
                        height="20"
                     />
                  )
               })}
            </Fragment>
         },
         {
            Header: 'status',
            accessor: 'status',
            Cell: props => <Fragment>
               {props.value === true ?
                  <Badge color="primary">Active</Badge>
                  :
                  <Badge color="danger">InActive</Badge>
               }
            </Fragment>
         },
         {
            Header: 'deadline',
            accessor: 'deadline',
         }
      ]
      return (
         <RctCard>
            <RctCardContent>
               <Table
                 columns={columns} 
                 data={data}
                 minRows={10}
               />
            </RctCardContent>
         </RctCard>
      );
   }
}
export default ProjectListing;